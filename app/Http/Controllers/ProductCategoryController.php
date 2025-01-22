<?php

namespace App\Http\Controllers;

use App\Models\ProductCategory;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;

class ProductCategoryController extends Controller
{
    
    public function search(Request $request) {
        $categories;
        if($request->name != null) {
            $categories = ProductCategory::where('name', 'like', '%'.$request->name.'%')->paginate(10);
        } else {
            $categories = ProductCategory::latest()->paginate(10);
        }
        return redirect()->back()
        ->with('data',  $categories);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = ProductCategory::latest()->paginate(10);
        return inertia("Admin/Category", ['categories' => $categories]);
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
            'name' => ['required', 'unique:product_categories'],
            'description' => ['nullable']
        ]);

        DB::beginTransaction();

        try {
            ProductCategory::create($data);
        
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
        // dd($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(ProductCategory $productCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ProductCategory $productCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ProductCategory $productCategory)
    {
        $data = $request->validate([
            'name' => ['required'],
            'description' => ['nullable']
        ]);
        
        DB::beginTransaction();

        try {
            $category = ProductCategory::find($request->id);
            $category->update($data);
        
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
     * Remove the specified resource from storage.
     */
    public function destroy(ProductCategory $productCategory)
    {
        //
    }
}
