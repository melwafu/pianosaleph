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

            if($request->image != null) {
                $productImage = DB::table('product_images')
                ->where('product_id', '=', $request->id)
                ->where('order', '=', 1)
                ->first();

                $imageName = time().'.'.$request->image->extension();
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
                    $productNewImage->order = 1;
                    $productNewImage->image = 'docs/images/productsImage/'.$imageName;
                    $productNewImage->save();
                };

                // // Resize Image
                // $img = Image::read($request->image->path());
                // $img->resize(500, 500, function ($constraint) {$constraint->aspectRatio();});
                // $img->save(public_path('docs/images/productsImage/'. $imageName));
                $request->image->move(public_path('docs/images/productsImage/'), $imageName);
            };

            if($request->image_2 != null) {
                $productImage_2 = DB::table('product_images')
                ->where('product_id', '=', $request->id)
                ->where('order', '=', 2)
                ->first();

                $imageName_2 = time().'.'.$request->image_2->extension();
                if($productImage_2) {
                    // // Delete exesting image
                    $file_path = public_path($productImage_2->image);
                    if (File::exists($file_path)) {
                        File::delete($file_path);
                    };
                    // Upload new image
                    $updateProductImage = ProductImage::find($productImage_2->id);
                    $updateProductImage->image = 'docs/images/productsImage/'.$imageName_2;
                    $updateProductImage->save();
                } else {
                    $productNewImage = new ProductImage;
                    $productNewImage->product_id = $product->id;
                    $productNewImage->order = 2;
                    $productNewImage->image = 'docs/images/productsImage/'.$imageName_2;
                    $productNewImage->save();
                };

                $request->image_2->move(public_path('docs/images/productsImage/'), $imageName_2);
            };

            if($request->image_3 != null) {
                $productImage_3 = DB::table('product_images')
                ->where('product_id', '=', $request->id)
                ->where('order', '=', 3)
                ->first();

                $imageName_3 = time().'.'.$request->image_3->extension();
                if($productImage_3) {
                    // // Delete exesting image
                    $file_path = public_path($productImage_3->image);
                    if (File::exists($file_path)) {
                        File::delete($file_path);
                    };
                    // Upload new image
                    $updateProductImage = ProductImage::find($productImage_3->id);
                    $updateProductImage->image = 'docs/images/productsImage/'.$imageName_3;
                    $updateProductImage->save();
                } else {
                    $productNewImage = new ProductImage;
                    $productNewImage->product_id = $product->id;
                    $productNewImage->order = 3;
                    $productNewImage->image = 'docs/images/productsImage/'.$imageName_3;
                    $productNewImage->save();
                };

                $request->image_3->move(public_path('docs/images/productsImage/'), $imageName_3);
            };

            if($request->image_4 != null) {
                $productImage_4 = DB::table('product_images')
                ->where('product_id', '=', $request->id)
                ->where('order', '=', 4)
                ->first();

                $imageName_4 = time().'.'.$request->image_4->extension();
                if($productImage_4) {
                    // // Delete exesting image
                    $file_path = public_path($productImage_4->image);
                    if (File::exists($file_path)) {
                        File::delete($file_path);
                    };
                    // Upload new image
                    $updateProductImage = ProductImage::find($productImage_4->id);
                    $updateProductImage->image = 'docs/images/productsImage/'.$imageName_4;
                    $updateProductImage->save();
                } else {
                    $productNewImage = new ProductImage;
                    $productNewImage->product_id = $product->id;
                    $productNewImage->order = 4;
                    $productNewImage->image = 'docs/images/productsImage/'.$imageName_4;
                    $productNewImage->save();
                };

                $request->image_4->move(public_path('docs/images/productsImage/'), $imageName_4);
            };

            if($request->image_5 != null) {
                $productImage_5 = DB::table('product_images')
                ->where('product_id', '=', $request->id)
                ->where('order', '=', 5)
                ->first();

                // dd($productImage_5);
                $imageName_5 = time().'.'.$request->image_5->extension();
                if($productImage_5) {
                    // // Delete exesting image
                    $file_path = public_path($productImage_5->image);
                    if (File::exists($file_path)) {
                        File::delete($file_path);
                    };
                    // Upload new image
                    $updateProductImage = ProductImage::find($productImage_5->id);
                    $updateProductImage->image = 'docs/images/productsImage/'.$imageName_5;
                    $updateProductImage->save();
                } else {
                    $productNewImage = new ProductImage;
                    $productNewImage->product_id = $product->id;
                    $productNewImage->order = 5;
                    $productNewImage->image = 'docs/images/productsImage/'.$imageName_5;
                    $productNewImage->save();
                };

                $request->image_5->move(public_path('docs/images/productsImage/'), $imageName_5);
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
            if($request->image != null && $request->image != '') {
                $imageName = time().'.'.$request->image->extension();

                // // Resize Image
                // $img = Image::read($request->image->path());
                // $img->resize(500, 500, function ($constraint) {
                //     $constraint->aspectRatio();
                // });
                // $img->save(public_path('docs/images/productsImage/'. $imageName));
                $request->image->move(public_path('docs/images/productsImage/'), $imageName);
    
                $productImage = new ProductImage;
                $productImage->product_id = $product->id;
                $productImage->order = 1;
                $productImage->image = 'docs/images/productsImage/'.$imageName;
                $productImage->save();
            };

            if($request->image_2 != null && $request->image_2 != '') {
                $imageName_2 = time().'.'.$request->image_2->extension();

                $request->image_2->move(public_path('docs/images/productsImage/'), $imageName_2);
    
                $productImage_2 = new ProductImage;
                $productImage_2->product_id = $product->id;
                $productImage_2->order = 1;
                $productImage_2->image = 'docs/images/productsImage/'.$imageName_2;
                $productImage_2->save();
            };

            if($request->image_3 != null && $request->image_3 != '') {
                $imageName_3 = time().'.'.$request->image_3->extension();

                $request->image_3->move(public_path('docs/images/productsImage/'), $imageName_3);
    
                $productImage_3 = new ProductImage;
                $productImage_3->product_id = $product->id;
                $productImage_3->order = 1;
                $productImage_3->image = 'docs/images/productsImage/'.$imageName_3;
                $productImage_3->save();
            };

            if($request->image_4 != null && $request->image_4 != '') {
                $imageName_4 = time().'.'.$request->image_4->extension();

                $request->image_4->move(public_path('docs/images/productsImage/'), $imageName_4);
    
                $productImage_4 = new ProductImage;
                $productImage_4->product_id = $product->id;
                $productImage_4->order = 1;
                $productImage_4->image = 'docs/images/productsImage/'.$imageName_4;
                $productImage_4->save();
            };

            if($request->image_5 != null && $request->image_5 != '') {
                $imageName_5 = time().'.'.$request->image_5->extension();

                $request->image_5->move(public_path('docs/images/productsImage/'), $imageName_5);
    
                $productImage_5 = new ProductImage;
                $productImage_5->product_id = $product->id;
                $productImage_5->order = 1;
                $productImage_5->image = 'docs/images/productsImage/'.$imageName_5;
                $productImage_5->save();
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
