<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductImage;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
// use Intervention\Image\Laravel\Facades\Image;
use DB;


class ProductController extends Controller
{
    public function customUpdate(Request $request) {
        $data = $request->validate([
            'name' => ['required'],
            'price' => ['required'],
            'product_category_id' => ['required'],
            'description' => ['nullable'],
        ]);
        
        DB::beginTransaction();

        try {
            $product = Product::find($request->id);
            $product->update($data);


            $order = 0;
            foreach($request->allFiles() as $index => $file) {
                $count += 1;

                $productImage = DB::table('product_images')
                ->where('product_id', '=', $request->id)
                ->where('order', '=', $order)
                ->first();

                $imageName = time().$order.'.'.$file->extension();
                if($productImage) {
                    // // Delete exesting image
                    $file_path = public_path($productImage->image);
                    if (File::exists($file_path)) {
                        File::delete($file_path);
                    };
                    // Upload new image
                    $updateProductImage = ProductImage::find($productImage->id);
                    $updateProductImage->image = 'docs/images/productsImage/'.$imageName;
                    $updateProductImage->save();
                } else {
                    $productNewImage = new ProductImage;
                    $productNewImage->product_id = $product->id;
                    $productNewImage->order = $order;
                    $productNewImage->image = 'docs/images/productsImage/'.$imageName;
                    $productNewImage->save();
                };

                $file->move(public_path('docs/images/productsImage/'), $imageName);
            };

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

    public function search(Request $request) {
        $products;
        if($request->name != null) {
            $products = DB::table('products as p')
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
            ->where('p.name', 'like', '%'.$request->name.'%')
            ->orderBy('p.id', 'DESC')
            ->paginate(10);
        } else {
            $products = DB::table('products as p')
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
            ->paginate(10);
        }
        return redirect()->back()
        ->with('data',  $products);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = DB::table('products as p')
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
        ->select(
            'p.id', 
            'p.name', 
            'p.price', 
            'p.description', 
            'p.created_at', 
            'pc.name as product_category', 
            'pc.id as product_category_id',
            'pimg.image as image',
            'pimg_2.image as image_2',
            'pimg_3.image as image_3',
            'pimg_4.image as image_4',
            'pimg_5.image as image_5',
        )
        ->orderBy('p.id', 'DESC')
        ->paginate(10);

        $category = DB::table('product_categories')
        ->select('id as value', 'name as label')
        ->get();

        return inertia("Admin/Products", ['products' => $products, 'category' => $category]);
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
            'name' => ['required', 'unique:products'],
            'description' => ['nullable'],
            'product_category_id' => ['required'],
            'price' => ['required'],
            'image' => ['required', 'image', 'mimes:jpeg,png,jpg,gif'],
        ]);
        
        DB::beginTransaction();

        try {

            $product = Product::create($data);

            // Upload Image
            $order = 0;
            foreach($request->allFiles() as $index => $file) {
                $count += 1;
                // do uploading like what you are doing in your single file.

                $imageName = time().$order.'.'.$file->extension();

                // // Resize Image
                // $img = Image::read($request->image->path());
                // $img->resize(500, 500, function ($constraint) {
                //     $constraint->aspectRatio();
                // });
                // $img->save(public_path('docs/images/productsImage/'. $imageName));
    
                $productImage = new ProductImage;
                $productImage->product_id = $product->id;
                $productImage->order = $order;
                $productImage->image = 'docs/images/productsImage/'.$imageName;
                $productImage->save();

                $file->move(public_path('docs/images/productsImage/'), $imageName);
            };
        
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
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
