<?php

namespace App\Http\Controllers;

use App\Models\ProductCategory;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;

class DashboardController extends Controller
{
    public function index() 
    {
        $inventories = DB::table('products as p')
        ->leftJoin('product_inventories as pi', 'p.id' , '=', 'pi.product_id')
        ->select(
            DB::raw('(CASE WHEN sum(pi.quantity) != 0 THEN sum(pi.quantity) ELSE 0 END) AS quantity')
        )
        ->get();

        return inertia("Admin/Dashboard", ['inventories' => $inventories]);
    }
}