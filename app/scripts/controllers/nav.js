'use strict';

angular.module('livingwalldesignerApp').controller('NavCtrl', function ($scope, PreviewImageService) {

	var currentActive = null;

	function TopLevel (args) {
		this.title = args.title;
		this.url = args.url;
		this.subs = args.subs;
		this.hasSub = args.hasSub;
		this.isCollapsed = args.isCollapsed;
	}

	function SubLevel (args) {
		this.title = args.title;
		this.image = args.image;
	}

	function Contents () {
		this.topLevels = [];
	}

	var createContents = function () {
		var contents = new Contents();
		contents.topLevels.push(
			new TopLevel({
				title: 'Home',
				url: '/',
				subs: [],
				hasSub: false,
				isCollapsed: true
			})
		);
		contents.topLevels.push(
			new TopLevel({
				title: 'Introduction',
				url: '/main',
				subs: [
					new SubLevel({isActive: false, title: 'Visual table of contents', image: null}),
					new SubLevel({isActive: false, title: 'Color theory basics', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_201510097.jpg"}),
					new SubLevel({isActive: false, title: 'Plant Biology basics', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_201510098.jpg"}),
					new SubLevel({isActive: false, title: 'Desigin tatics', image: null}),
					new SubLevel({isActive: false, title: 'Design tatics 2', image: null})
				],
				hasSub: true,
				isCollapsed: true
			})
		);
		contents.topLevels.push(
			new TopLevel({
				title: 'Design Information',
				url: '/main',
				subs: [
					new SubLevel({isActive: false, title: 'Appendicies visualization', image: null}),
					new SubLevel({isActive: false, title: 'Framework for review', image: null}),
					new SubLevel({isActive: false, title: 'Site Design', image: null}),
					new SubLevel({isActive: false, title: 'Pre-Design', image: null}),
					new SubLevel({isActive: false, title: 'Schematic Design', image: null}),
					new SubLevel({isActive: false, title: 'Ideation', image: null}),
					new SubLevel({isActive: false, title: 'Charactersitic Collection', image: null}),
					new SubLevel({isActive: false, title: 'Project Criteria', image: null}),
					new SubLevel({isActive: false, title: 'Representation', image: null}),
					new SubLevel({isActive: false, title: 'Iteration', image: null}),
					new SubLevel({isActive: false, title: 'Evaluate Iteration', image: null}),
					new SubLevel({isActive: false, title: 'Choose Iteration', image: null}),
					new SubLevel({isActive: false, title: 'Implementation', image: null}),
					new SubLevel({isActive: false, title: 'Choosing by advantages', image: null}),
					new SubLevel({isActive: false, title: 'Studio Method', image: null}),
				],
				hasSub: true,
				isCollapsed: true
			})
		);
		contents.topLevels.push(
			new TopLevel({
				title: 'Visual Framework',
				url: '/main',
				subs: [
					new SubLevel({isActive: false, title: 'Condensed Framework', image: null}),
					new SubLevel({isActive: false, title: 'Expended Framework', image: null}),
				],
				hasSub: true,
				isCollapsed: true
			})
		);
		contents.topLevels.push(
			new TopLevel({
				title: 'Topical Considerations',
				url: '/main',
				subs: [
					new SubLevel({isActive: false, title: 'Hue decision factors', image: null}),
					new SubLevel({isActive: false, title: 'Color mixture/composition', image: null}),
					new SubLevel({isActive: false, title: 'Saturation', image: null}),
					new SubLevel({isActive: false, title: 'Value', image: null}),
					new SubLevel({isActive: false, title: 'Graphics', image: null}),
					new SubLevel({isActive: false, title: 'Plant Species', image: null}),
					new SubLevel({isActive: false, title: 'Native vs Non-native', image: null}),
					new SubLevel({isActive: false, title: 'Climbing Mechanism', image: null}),
					new SubLevel({isActive: false, title: 'Royal Horticulture Society', image: null}),
					new SubLevel({isActive: false, title: 'Diagram plant color annually', image: null}),
					new SubLevel({isActive: false, title: 'Multiple speices color diagram', image: null}),
					new SubLevel({isActive: false, title: 'Hand techniques descriptions', image: null}),
					new SubLevel({isActive: false, title: 'Computer assisted description', image: null}),
					new SubLevel({isActive: false, title: 'Computer assisted examples', image: null}),
					new SubLevel({isActive: false, title: 'Computer assisted programs', image: null}),
					new SubLevel({isActive: false, title: 'Representation in Architecture', image: null}),
					new SubLevel({isActive: false, title: 'Design Criterion/Prompts', image: null}),
					new SubLevel({isActive: false, title: 'Masonry material consideration', image: null}),
					new SubLevel({isActive: false, title: 'Masonry examples', image: null}),
					new SubLevel({isActive: false, title: 'Other materials considerations', image: null}),
					new SubLevel({isActive: false, title: 'Other material examples', image: null}),
					new SubLevel({isActive: false, title: 'Decoration uses', image: null}),
					new SubLevel({isActive: false, title: 'Performance uses', image: null}),
				],
				hasSub: true,
				isCollapsed: true
			})
		);
		contents.topLevels.push(
			new TopLevel({
				title: 'CHPE',
				url: '/chpe',
				subs: [],
				hasSub: false,
				isCollapsed: true
			})
		);
		contents.topLevels.push(
			new TopLevel({
				title: 'Help',
				url: '/help',
				subs: [],
				hasSub: false,
				isCollapsed: true
			})
		);
		contents.topLevels.push(
			new TopLevel({
				title: 'About',
				url: '/about',
				subs: [],
				hasSub: false,
				isCollapsed: true
			})
		);
		return contents;
	};

	$scope.isExpanded = function (topLevel) {
		if (topLevel.hasSub === true && !topLevel.isCollapsed) {
			return true;
		}
		return false;
	};

	$scope.isActive = function (sub) {
		return sub.isActive;
	};

	$scope.changeActive = function (sub) {
		// if currentActive is not null
		if (currentActive) {
			currentActive.isActive = false;
		}
		currentActive = sub;
		currentActive.isActive = true;
	};

	$scope.changePic = function (url) {
		PreviewImageService.setPreviewImageUrl(url);
	};

	var init = function () {
		$scope.navContents = createContents();
		console.log($scope.navContents);
	};

	init();
});