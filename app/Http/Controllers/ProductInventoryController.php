<?php

namespace App\Http\Controllers;

use App\Models\ProductInventory;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;

class ProductInventoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $inventories = DB::table('products as p')
        ->leftJoin('product_inventories as pi', 'p.id' , '=', 'pi.product_id')
        ->select(
            'p.id', 
            'p.name', 
            'p.price',
            DB::raw('(CASE WHEN sum(pi.quantity) != 0 THEN sum(pi.quantity) ELSE 0 END) AS quantity')
        )
        ->groupBy('p.id', 'p.name', 'p.price')
        ->orderBy('p.name', 'ASC')
        ->paginate(10);

        $products = DB::table('products as p')
        ->select('p.id as value', 'p.name as label')
        ->get();
        
        return inertia("Admin/Inventory", ['inventories' => $inventories, 'products' => $products]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'product_id' => ['required'],
            'quantity' => ['required'],
        ]);
        
        DB::beginTransaction();

        try {
            ProductInventory::create($data);
        
            DB::commit();
            // all good
            return redirect()->back()
            ->with('success', 'Saved Successfully');
        } catch (\Exception $e) {
            DB::rollback();
            // something went wrong
            return redirect()->back()
            ->with('error', $e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(ProductInventory $productInventory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ProductInventory $productInventory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ProductInventory $productInventory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ProductInventory $productInventory)
    {
        //
    }
}
