<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class AdminTemplateTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testAdminPageHasRightStyleSheet()
    {
        $this->visit('/admin')
            ->see('admin.css');
    }
}
