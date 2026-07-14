<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * Non-API requests redirect to the Vue frontend.
     */
    public function test_non_api_requests_redirect_to_the_frontend(): void
    {
        $response = $this->get('/');

        $response->assertRedirect(config('app.frontend_url').'/');
    }

    public function test_unmatched_api_requests_return_a_404(): void
    {
        $response = $this->get('/api/does-not-exist');

        $response->assertStatus(404);
    }
}
