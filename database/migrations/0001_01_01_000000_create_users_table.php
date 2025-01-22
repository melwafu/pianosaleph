<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users_type', function (Blueprint $table) {
            $table->id();
            $table->string('user_type');
            $table->string('permissions', 1000);
            $table->timestamps();
        });

        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->integer('user_type_id')->nullable();
            $table->string('name');
            $table->string('username')->nullable();;
            $table->string('first_name')->nullable();;
            $table->string('last_name')->nullable();;
            $table->integer('telephone')->nullable();;
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('users_address', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->string('address_line1', 500);
            $table->string('address_line2', 500);
            $table->string('city');
            $table->string('postal_code');
            $table->string('country');
            $table->string('telephone');
            $table->string('mobile');
        });

        Schema::create('users_payment', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->string('payment_type');
            $table->string('provider');
            $table->integer('account_no');
            $table->date('expiry');
        });

        Schema::create('cart_item', function (Blueprint $table) {
            $table->id();
            $table->integer('shopping_session_id');
            $table->integer('product_id');
            $table->integer('quantity');
            $table->timestamps();
        });

        Schema::create('shopping_session', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->decimal('total');
            $table->timestamps();
        });

        Schema::create('order_items', function (Blueprint $table) {
            $table->id();
            $table->integer('order_details_id');
            $table->integer('product_id');
            $table->integer('quantity');
            $table->timestamps();
        });

        Schema::create('order_details', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->decimal('total');
            $table->integer('payment_details_id');
            $table->timestamps();
        });

        Schema::create('payment_details', function (Blueprint $table) {
            $table->id();
            $table->integer('order_details_id');
            $table->integer('amount');
            $table->string('provider');
            $table->string('status');
            $table->timestamps();
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users_type');
        Schema::dropIfExists('users');
        Schema::dropIfExists('users_address');
        Schema::dropIfExists('users_payment');
        Schema::dropIfExists('cart_item');
        Schema::dropIfExists('shopping_session');
        Schema::dropIfExists('order_items');
        Schema::dropIfExists('order_details');
        Schema::dropIfExists('payment_details');

        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
