<?php

namespace App\Http\Controllers;

use App\Models\ProductCategory;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;

class HomeController extends Controller
{
    public function index() 
    {
        $consoles = DB::table('products as p')
        ->leftJoin('product_categories as pc', 'p.product_category_id', '=', 'pc.id')
        ->leftJoin('product_images as pimg', 'p.id', '=', 'pimg.product_id')
        ->leftJoin('product_inventories as pi', 'p.id', '=', 'pi.product_id')
        ->select(
            'p.id', 
            'p.name', 
            'p.price', 
            'p.description', 
            'p.created_at', 
            'pc.name as product_category', 
            'pimg.image',
            DB::raw('(CASE WHEN sum(pi.quantity) != 0 THEN sum(pi.quantity) ELSE 0 END) AS quantity')
        )
        ->groupBy(
            'p.id', 
            'p.name', 
            'p.price', 
            'p.description', 
            'p.created_at', 
            'product_category',
            'pimg.image'
        )
        ->where('quantity', '>', 0)
        ->inRandomOrder()
        ->limit(4)
        ->get();

        $category = DB::table('product_categories')
        ->select('id as value', 'name as label')
        ->get();

        return inertia("Home", ['consoles' => $consoles, 'category' => $category]);

    }
}