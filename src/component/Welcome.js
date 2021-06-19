import React from 'react';
import imgOne from '../component/img/photos/about2.jpg'
import imgTwo from '../component/img/photos/about3.jpg'


function Welcome(props) {
	return (
		<div>
			<section class="wrapper bg-light angled upper-end lower-end">
			<div class="container py-14 py-md-16">
				<div class="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
					<div class="col-lg-6 position-relative order-lg-2">
						<div class="shape bg-dot primary rellax w-16 h-20" data-rellax-speed="1" style={{top: 3 , left: 5.5}}></div>
						<div class="overlap-grid overlap-grid-2">
							<div class="item">
								<figure class="rounded shadow"><img src={imgOne} srcset="src/img/photos/about2@2x.jpg 2x" alt=""/></figure>
							</div>
							<div class="item">
								<figure class="rounded shadow"><img src={imgTwo} srcset="src/img/photos/about3@2x.jpg 2x" alt=""/></figure>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<img src="src/img/icons/megaphone.svg" class="svg-inject icon-svg icon-svg-md mb-4" alt="" />
						<h2 class="display-4 mb-3">Welcome</h2>
						<p class="lead fs-lg">If you have just signed up your account is not activated so you will not be able to update your profile</p>
						<p class="mb-6">If your account is activated use the links below to access and update your profile</p>
						<div class="row gy-3 gx-xl-8">
							<div class="col-xl-6">
								<ul class="icon-list bullet-bg bullet-soft-primary mb-0">
									<li><span><i class="uil uil-check"></i></span><span>Go to My Profile.</span></li>
									<li class="mt-3"><span><i class="uil uil-check"></i></span><span>Nullam quis risus eget urna mollis ornare donec elit.</span></li>
								</ul>
							</div>
							<div class="col-xl-6">
								<ul class="icon-list bullet-bg bullet-soft-primary mb-0">
									<li><span><i class="uil uil-check"></i></span><span>Etiam porta sem malesuada magna mollis euismod.</span></li>
									<li class="mt-3"><span><i class="uil uil-check"></i></span><span>Fermentum massa vivamus faucibus amet euismod.</span></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			
			</div>
		</section>
</div>
	);
}

export default Welcome;