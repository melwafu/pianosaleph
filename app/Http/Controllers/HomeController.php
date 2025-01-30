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
        ->leftJoin('product_images as pimg', function ($join) {
            $join->on('p.id', '=', 'pimg.product_id')
                ->where('pimg.order', '=', 1);
        })
        ->leftJoin('product_images as pimg_2', function ($join) {
            $join->on('p.id', '=', 'pimg_2.product_id')
                ->where('pimg_2.order', '=', 2);
        })
        ->leftJoin('product_images as pimg_3', function ($join) {
            $join->on('p.id', '=', 'pimg_3.product_id')
                ->where('pimg_3.order', '=', 3);
        })
        ->leftJoin('product_images as pimg_4', function ($join) {
            $join->on('p.id', '=', 'pimg_4.product_id')
                ->where('pimg_4.order', '=', 4);
        })
        ->leftJoin('product_images as pimg_5', function ($join) {
            $join->on('p.id', '=', 'pimg_5.product_id')
                ->where('pimg_5.order', '=', 5);
        })
        ->leftJoin('product_inventories as pi', 'p.id', '=', 'pi.product_id')
        ->select(
            'p.id',
            'p.name',
            'p.price',
            'p.description',
            'p.created_at',
            'pc.name as product_category',
            'pimg.image as image',
            'pimg_2.image as image_2',
            'pimg_3.image as image_3',
            'pimg_4.image as image_4',
            'pimg_5.image as image_5',
            DB::raw('COALESCE(SUM(pi.quantity), 0) AS quantity')
        )
        ->groupBy(
            'p.id',
            'p.name',
            'p.price',
            'p.description',
            'p.created_at',
            'pc.name',
            'pimg.image',
            'pimg_2.image',
            'pimg_3.image',
            'pimg_4.image',
            'pimg_5.image'
        )
        ->havingRaw('quantity > 0')
        ->inRandomOrder()
        ->limit(8)
        ->get();
    
        $category = DB::table('product_categories')
        ->select('id as value', 'name as label')
        ->get();

        return inertia("Home", ['consoles' => $consoles, 'category' => $category]);

    }
}