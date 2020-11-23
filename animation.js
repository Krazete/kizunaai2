import {VRButton} from './VRButton.js';

var instances;
$(function() {
	var $myc = $('#myc');
	var $mycAnimationArea = $myc.find('#myc-animation-area');
	var $mycIsPc = $('#myc-is-pc');
	var $topLoading = $myc.find('#myc-top-loading');
	var $topLoadingBar = $topLoading.find('.bar');

	var vmdLists = {
		1: {
			'fileName': 'biography01_foot_shusei_Bake.vmd',
			'pc': {
				'rotationY': 95,
				'positionX': -24,
				'cameraZ': 38,
				'cameraY': 10
			},
			'sp': {
				'rotationY': 95,
				'positionX': -18,
				'cameraZ': 45,
				'cameraY': 6
			},
			'isHidden': true,
		},
		2: {
			'fileName': 'biography02_FIX_Bake.vmd',
			'pc': {
				'rotationY': 115,
				'positionX': -20,
				'cameraZ': 30,
				'cameraY': 9
			},
			'sp': {
				'rotationY': 95,
				'positionX': -14,
				'cameraZ': 45,
				'cameraY': 5
			},
			'isHidden': false
		},
		3: {
			'fileName': 'contact01_FIX_Bake.vmd',
			'pc': {
				'rotationY': 30,
				'positionX': -5,
				'cameraZ': 15,
				'cameraY': 19
			},
			'sp': {
				'rotationY': 30,
				'positionX': -5,
				'cameraZ': 15,
				'cameraY': 20
			},
			'isHidden': false
		},
		4: {
			'fileName': 'contact02_FIX_Bake.vmd',
			'pc': {
				'rotationY': 75,
				'positionX': -11,
				'cameraZ': 15,
				'cameraY': 19
			},
			'sp': {
				'rotationY': 75,
				'positionX': -11,
				'cameraZ': 13,
				'cameraY': 21
			},
			'isHidden': false
		},
		5: {
			'fileName': 'contact03_FIX_Bake.vmd',
			'pc': {
				'rotationY': 90,
				'positionX': -13,
				'cameraZ': 15,
				'cameraY': 19
			},
			'sp': {
				'rotationY': 90,
				'positionX': -12,
				'cameraZ': 15,
				'cameraY': 20
			},
			'isHidden': false
		},
		6: {
			'fileName': 'news01_FIX_Bake.vmd',
			'pc': {
				'rotationY': 22,
				'positionX': -4,
				'cameraZ': 10,
				'cameraY': 16
			},
			'sp': {
				'rotationY': -10,
				'positionX': 2,
				'cameraZ': 9,
				'cameraY': 16
			},
			'isHidden': false
		},
		7: {
			'fileName': 'news02_FIX_Bake.vmd',
			'pc': {
				'rotationY': 26,
				'positionX': -4,
				'cameraZ': 10,
				'cameraY': 16
			},
			'sp': {
				'rotationY': -5,
				'positionX': 2,
				'cameraZ': 9,
				'cameraY': 16
			},
			'isHidden': false
		},
		8: {
			'fileName': 'iahigher2.vmd',
			'pc': {
				'rotationY': 175,
				'positionX': 0,
				'cameraZ': 35,
				'cameraY': 13
			},
			'sp': {
				'rotationY': 0,
				'positionX': -1,
				'cameraZ': 55,
				'cameraY': 13
			},
			'isHidden': false
		},
		9: {
			'fileName': 'top_left01_FIX_Bake.vmd',
			'pc': {
				'rotationY': 270,
				'positionX': 24,
				'cameraZ': 25,
				'cameraY': 14
			},
			'sp': {
				'rotationY': -90,
				'positionX': 24,
				'cameraZ': 20,
				'cameraY': 15
			},
			'isHidden': false
		},
		10: {
			'fileName': 'top_right01_FIX_Base.vmd',
			'pc': {
				'rotationY': 280,
				'positionX': 0,
				'cameraZ': 29,
				'cameraY': 13
			},
			'sp': {
				'rotationY': -80,
				'positionX': 0,
				'cameraZ': 26,
				'cameraY': 13
			},
			'isHidden': false
		},
		11: {
			'fileName': 'top_right02_FIX_Bake.vmd',
			'pc': {
				'rotationY': 270,
				'positionX': 23,
				'cameraZ': 25,
				'cameraY': 13
			},
			'sp': {
				'rotationY': -90,
				'positionX': 23,
				'cameraZ': 25,
				'cameraY': 13
			},
			'isHidden': false
		},
		12: {
			'fileName': 'YoutubeAIC_01_02_FIX_Bake.vmd',
			'pc': {
				'rotationY': 22,
				'positionX': -4,
				'cameraZ': 11,
				'cameraY': 16
			},
			'sp': {
				'rotationY': 5,
				'positionX': 0,
				'cameraZ': 11,
				'cameraY': 16
			},
			'isHidden': false
		},
		13: {
			'fileName': 'Youtube_AIC02_FIX_Bake.vmd',
			'pc': {
				'rotationY': -95,
				'positionX': 11,
				'cameraZ': 15,
				'cameraY': 19
			},
			'sp': {
				'rotationY': -95,
				'positionX': 11,
				'cameraZ': 15,
				'cameraY': 21
			},
			'isHidden': false
		},
		14: {
			'fileName': 'Youtube_AIG01_FIX.vmd',
			'pc': {
				'rotationY': 0,
				'positionX': 0,
				'cameraZ': 35,
				'cameraY': 11
			},
			'sp': {
				'rotationY': 0,
				'positionX': 0,
				'cameraZ': 35,
				'cameraY': 11
			},
			'isHidden': false
		},
		15: {
			'fileName': 'Youtube_AIG02_FIX_Bake.vmd',
			'pc': {
				'rotationY': 25,
				'positionX': -5,
				'cameraZ': 14,
				'cameraY': 19
			},
			'sp': {
				'rotationY': 25,
				'positionX': -5,
				'cameraZ': 14,
				'cameraY': 21
			},
			'isHidden': false
		},
		16: {
			'fileName': 'Youtube_AIG03_FIX_Bake.vmd',
			'pc': {
				'rotationY': 100,
				'positionX': -11,
				'cameraZ': 14,
				'cameraY': 19
			},
			'sp': {
				'rotationY': 100,
				'positionX': -11,
				'cameraZ': 14,
				'cameraY': 21
			},
			'isHidden': false
		},
		17: {
			'fileName': 'Youtube_AIG02_FIX_Bake.vmd',
			'pc': {
				'rotationY': 22,
				'positionX': -4,
				'cameraZ': 11,
				'cameraY': 16
			},
			'sp': {
				'rotationY': -5,
				'positionX': 2,
				'cameraZ': 11,
				'cameraY': 16
			},
			'isHidden': false
		},
	};


	var defaultCamera = {
		position: {
			x: 0,
			y: 11,
			z: 35
		},
		lookAt: new THREE.Vector3(0, 11, 0)
	};


	var targetCameraPosition = {
		x: 0,
		y: defaultCamera.position.y
	};

	if ($myc.hasClass('type-top')) {
		var motionSensor = new MotionSensor();
		motionSensor.move = function(e) {
			targetCameraPosition.x = e.x * 4;
			targetCameraPosition.y = -e.y * 3 + defaultCamera.position.y;
		};
	}


	var getUrlParameters = function () {
		var parameters = [];
		var hash = '';
		var url = window.location.search;

		hash = url.slice(1).split('&');

		for (var i = 0; i < hash.length; i++) {
			var array = hash[i].split('=');
			parameters.push(array[0]);
			parameters[array[0]] = array[1];
		}

		return parameters;
	}

	var urlParameters = getUrlParameters();


	var isPhysics = false;

	if (urlParameters.physics == 'on') {
		isPhysics = true;
	}


	var vmdPlayList = [1];
	var vmdPlayIndex = 0;

	for (var i = vmdPlayList.length - 1; i > 0; i--) {
		var r = Math.floor(Math.random() * (i + 1));
		var tmp = vmdPlayList[i];
		vmdPlayList[i] = vmdPlayList[r];
		vmdPlayList[r] = tmp;
	}

	window.onload = function() {
		Ammo().then(function(AmmoLib) {
			Ammo = AmmoLib;
			init();
		});
	};


	var init = function() {
		$mycAnimationArea[0].style.maxWidth="initial";
		var clock = new THREE.Clock();

		// create a scene, that will hold all our elements such as objects, cameras and lights.
		var scene = new THREE.Scene();

		// create a camera, which defines where we're looking at.
		var camera = new THREE.PerspectiveCamera
		(
			45,
			$mycAnimationArea.width() / $mycAnimationArea.height(),
			0.1,
			1000
		);


		var renderer = new THREE.WebGLRenderer({antialias: true});
		renderer.setClearColor(new THREE.Color(0x000000));
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize
		(
			$mycAnimationArea.width(),
			$mycAnimationArea.height()
		);



		camera.position.x = defaultCamera.position.x;
		camera.position.y = defaultCamera.position.y;
		camera.position.z = defaultCamera.position.z;


		camera.lookAt(defaultCamera.lookAt);


		var ambientLight = new THREE.AmbientLight(0xeeeeee);
		scene.add(ambientLight);


		var gridHelper = new THREE.GridHelper
		(
			400,
			40,
			0x484848,
			0x484848
		);
		gridHelper.visible = false;
		// scene.add(gridHelper);


		var helper = new THREE.MMDAnimationHelper();
		// xp=helper;


		helper.enable('ik', false);
		helper.enable('physics', isPhysics);
		helper.enable('cameraAnimation', false);


		var loader = new THREE.MMDLoader();
		var isFirstPlay = true;
		var isHelperReady = false;
		var readyHelpers = 0;
		//var objectSource = null;
		instances = [
			{names: ['kizunaai.pmx', 'd2b/DivetoBlue_dance_iMarine_deci_R40.vmd']},
			{names: ['kizunaai.pmx', 'd2b/DivetoBlue_dance_Umiko_deci_R40.vmd']}
		];

		var motionAction = function() {
			for (var instance of instances) {
				(function(instance){
				if (!isFirstPlay) {
					var animationMixer = helper.objects.get(instance.object).mixer;
					animationMixer.stopAllAction();
					scene.remove(instance.object);
					helper.remove(instance.object);
					instance.object.geometry.dispose();
					instance.object = null;
				}

				loader.loadWithAnimation(
					mycAssetsPath + 'models/' + instance.names[0],
					mycAssetsPath + 'models/' + instance.names[1],
					function(object) {
						instance.object = object.mesh;

						var vmdNumber = vmdPlayList[vmdPlayIndex];
						var vmdData = vmdLists[vmdNumber];
						vmdPlayIndex++;
						if (vmdPlayIndex == vmdPlayList.length) {
							vmdPlayIndex = 0;
						}
						var vmdDataValues = vmdData.sp;
						if ($mycIsPc.is(':visible') && $(window).width() >= 720) {
							vmdDataValues = vmdData.pc;
						}

						instance.object.rotation.y = vmdDataValues.rotationY * (Math.PI / 180);
						instance.object.position.x = vmdDataValues.positionX;

						if (isFirstPlay) {
							camera.position.z = vmdDataValues.cameraZ;
							camera.position.y = vmdDataValues.cameraY;
							targetCameraPosition.y = vmdDataValues.cameraY;
						}

						var animationClip = object.animation;

						$topLoadingBar.css(
							'width',
							'100%'
						);
						$topLoading.addClass('hide');

						instance.object.visible = false;
						scene.add(instance.object);

						helper.add(
							instance.object, {
								animation: animationClip
							}
						);

						var animationMixer = helper.objects.get(instance.object).mixer;
						animationMixer.stopAllAction();
						instance.animation = animationMixer.clipAction(animationClip);
						instance.animation.setLoop(THREE.LoopOnce);
						instance.animation.clampWhenFinished = true;

						animationMixer.addEventListener(
							'finished',
							function(event) {
								isHelperReady = false;

								if (vmdData.isHidden) {
									instance.object.visible = false;
								}

								setTimeout(
									function() {
										motionAction();
									},
									5000
								);
							}
						);
						readyHelpers++;
						isHelperReady = readyHelpers == instances.length;
						isFirstPlay = false;
					},
					function(e) {
						$topLoadingBar.css(
							'width',((e.loaded / e.total) * 40) + '%'
						);
					}
				);
				})(instance);
			}
		};

		motionAction();

		scene.fog = new THREE.Fog(
			0x000000,
			150 * 0.5,
			150
		);

		document.body.appendChild( VRButton.createButton( renderer ) );
		renderer.xr.enabled = true;
		renderer.setAnimationLoop( function () {
			var delta = clock.getDelta();

			var cameraDiffX = targetCameraPosition.x - camera.position.x;
			var cameraDiffY = targetCameraPosition.y - camera.position.y;

			if (Math.abs(cameraDiffX) > 0.02) {
				camera.position.x += cameraDiffX * delta * 4;
			}

			if (Math.abs(cameraDiffY) > 0.02) {
				camera.position.y += cameraDiffY * delta * 4;
			}

			camera.lookAt(defaultCamera.lookAt);

			if (isHelperReady) {
				if (clockHelperReadyTime == -1) {
					clockHelperReadyTime = clock.elapsedTime;
					instances.forEach(e => e.object.visible = true);
				}
				else {
					if (clock.elapsedTime - clockHelperReadyTime > 0.5) {
						gridHelper.visible = true;
						for (var instance of instances) {
							instance.animation.play();
						}
					}
				}

				helper.update(delta);
			}

			renderer.render(scene, camera);
		} );


		// add the output of the renderer to the html element
		document.getElementById("myc-animation-area").appendChild(renderer.domElement);


		var clockHelperReadyTime = -1;

		var renderScene = function() {
			var delta = clock.getDelta();

			var cameraDiffX = targetCameraPosition.x - camera.position.x;
			var cameraDiffY = targetCameraPosition.y - camera.position.y;

			if (Math.abs(cameraDiffX) > 0.02) {
				camera.position.x += cameraDiffX * delta * 4;
			}

			if (Math.abs(cameraDiffY) > 0.02) {
				camera.position.y += cameraDiffY * delta * 4;
			}

			camera.lookAt(defaultCamera.lookAt);

			if (isHelperReady) {
				if (clockHelperReadyTime == -1) {
					clockHelperReadyTime = clock.elapsedTime;
					instances.forEach(e => e.object.visible = true);
				}
				else {
					if (clock.elapsedTime - clockHelperReadyTime > 0.5) {
						gridHelper.visible = true;
						for (var instance of instances) {
							instance.animation.play();
						}
					}
				}

				helper.update(delta);
			}

			renderer.render(scene, camera);
			requestAnimationFrame(renderScene);
		};

		renderScene();

		var onResize = function() {
			if ($myc.hasClass('history-bg-fix')) {
				return;
			}

			camera.aspect = $mycAnimationArea.width() / $mycAnimationArea.height();
			camera.updateProjectionMatrix();
			renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize(
				$mycAnimationArea.width(),
				$mycAnimationArea.height()
			);
		};

		window.addEventListener('resize', onResize, false);

		window.addEventListener("keydown", function(k) {
			instances.forEach(e => {
				if (k.keyCode == 78) {
					e.animation.time = 0;
				}
				if (k.keyCode == 77) {
					e.animation.time = 138;
				}
				if (k.keyCode == 32) {
					e.animation.paused = !e.animation.paused;
				}
				if (k.keyCode == 37) {
					e.animation.time -= k.shiftKey ? 0.1 : k.altKey ? 0.001 : 0.01;
				}
				if (k.keyCode == 39) {
					e.animation.time += k.shiftKey ? 0.1 : k.altKey ? 0.001 : 0.01;
				}
				e.animation.time = Math.round(1000 * e.animation.time) / 1000;
			});
			console.log(instances[0].animation.time);
		});

	};
});
