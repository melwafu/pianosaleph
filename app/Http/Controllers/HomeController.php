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
        ->leftJoin('product_images as pi', 'p.id', '=', 'pi.product_id')
        ->select(
            'p.id', 
            'p.name', 
            'p.price', 
            'p.description', 
            'p.created_at', 
            'pc.name as product_category', 
            'pc.id as product_category_id',
            'pi.image'
        )
        ->orderBy('p.id', 'DESC')
        ->inRandomOrder()
        ->limit(4)
        ->get();

        $category = DB::table('product_categories')
        ->select('id as value', 'name as label')
        ->get();

        return inertia("Home", ['consoles' => $consoles, 'category' => $category]);

    }
}