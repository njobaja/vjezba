<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <!-- ======= Header ======= -->
  <header id="header" class="header fixed-top d-flex align-items-center">

    <div class="d-flex align-items-center justify-content-between">
      <a href="index.html" class="logo d-flex align-items-center">
        <span class="d-none d-lg-block">NiceAdmin</span>
      </a>
    </div><!-- End Logo -->

    <div class="search-bar p-0">
      <form class="search-form d-flex align-items-center" method="POST" action="#">
        <input type="text" name="query" placeholder="Search" title="Enter search keyword">
        <button type="submit" title="Search"><i class="bi bi-search"></i></button>
      </form>
    </div><!-- End Search Bar -->

    <nav class="header-nav ms-auto">
      <ul class="d-flex align-items-center">

        <li class="nav-item d-block d-lg-none">
          <a class="nav-link nav-icon search-bar-toggle " href="#">
            <i class="bi bi-search"></i>
          </a>
        </li><!-- End Search Icon-->

        <li class="nav-item">
          <a class="nav-link disabled" href="#">Profile</a>
        </li>

      </ul>
    </nav><!-- End Icons Navigation -->

  </header><!-- End Header -->

  <!-- ======= Sidebar ======= -->
  <aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">

      <li class="nav-item">
       <RouterLink to="/" class="nav-link collapsed">Home</RouterLink>
      </li><!-- End Home Nav -->

      <li class="nav-item">
        <RouterLink to="/about" class="nav-link collapsed">About</RouterLink>
      </li><!-- End Home Nav -->

      <li class="nav-item">
       <RouterLink to="/placeholder1" class="nav-link collapsed">SpaceHolder1</RouterLink>
      </li><!-- End Placeholder Nav -->

      <li class="nav-item">
       <RouterLink to="/Vendors" class="nav-link collapsed">Vendors</RouterLink>
      </li>
        <li class="nav-item">
       <RouterLink to="/VendorsReports" class="nav-link collapsed">Vendors Reports</RouterLink>
      </li>
      <li class="nav-item">
       <RouterLink to="/AssetsReports" class="nav-link collapsed">Assets Reports</RouterLink>
      </li>

  
    </ul>

  </aside><!-- End Sidebar-->

  <main id="main" class="main">

    <section class="section faq">
      <div class="row">
        <div class="col-12">

          <div class="card basic">
            <div class="card-body mt-3">
              <RouterView />
            </div>
          </div>


        </div>
      </div>
    </section>

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer" class="footer">
    <div class="copyright">
      &copy; Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
    </div>
    <div class="credits">
      <!-- All the links in the footer should remain intact. -->
      <!-- You can delete the links only if you purchased the pro version. -->
      <!-- Licensing information: https://bootstrapmade.com/license/ -->
      <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </footer><!-- End Footer -->


</template>



<style>
@import '@/assets/bootstrap.min.css';
@import '@/assets/niceadmin.css';

</style>