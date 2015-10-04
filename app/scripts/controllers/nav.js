'use strict';

angular.module('livingwalldesignerApp').controller('NavCtrl', function ($scope, PreviewImageService) {

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
					new SubLevel({title: 'Visual table of contents', image: null}),
					new SubLevel({title: 'Color theory basics', image: "images/color_theory_basics.png"}),
					new SubLevel({title: 'Plant Biology basics', image: "images/plant_biology_basics.png"}),
					new SubLevel({title: 'Desigin tatics', image: null}),
					new SubLevel({title: 'Design tatics 2', image: null})
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
					new SubLevel({title: 'Appendicies visualization', image: null}),
					new SubLevel({title: 'Framework for review', image: null}),
					new SubLevel({title: 'Site Design', image: null}),
					new SubLevel({title: 'Pre-Design', image: null}),
					new SubLevel({title: 'Schematic Design', image: null}),
					new SubLevel({title: 'Ideation', image: null}),
					new SubLevel({title: 'Charactersitic Collection', image: null}),
					new SubLevel({title: 'Project Criteria', image: null}),
					new SubLevel({title: 'Representation', image: null}),
					new SubLevel({title: 'Iteration', image: null}),
					new SubLevel({title: 'Evaluate Iteration', image: null}),
					new SubLevel({title: 'Choose Iteration', image: null}),
					new SubLevel({title: 'Implementation', image: null}),
					new SubLevel({title: 'Choosing by advantages', image: null}),
					new SubLevel({title: 'Studio Method', image: null}),
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
					new SubLevel({title: 'Condensed Framework', image: null}),
					new SubLevel({title: 'Expended Framework', image: null}),
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
					new SubLevel({title: 'Hue decision factors', image: null}),
					new SubLevel({title: 'Color mixture/composition', image: null}),
					new SubLevel({title: 'Saturation', image: null}),
					new SubLevel({title: 'Value', image: null}),
					new SubLevel({title: 'Graphics', image: null}),
					new SubLevel({title: 'Plant Species', image: null}),
					new SubLevel({title: 'Native vs Non-native', image: null}),
					new SubLevel({title: 'Climbing Mechanism', image: null}),
					new SubLevel({title: 'Royal Horticulture Society', image: null}),
					new SubLevel({title: 'Diagram plant color annually', image: null}),
					new SubLevel({title: 'Multiple speices color diagram', image: null}),
					new SubLevel({title: 'Hand techniques descriptions', image: null}),
					new SubLevel({title: 'Computer assisted description', image: null}),
					new SubLevel({title: 'Computer assisted examples', image: null}),
					new SubLevel({title: 'Computer assisted programs', image: null}),
					new SubLevel({title: 'Representation in Architecture', image: null}),
					new SubLevel({title: 'Design Criterion/Prompts', image: null}),
					new SubLevel({title: 'Masonry material consideration', image: null}),
					new SubLevel({title: 'Masonry examples', image: null}),
					new SubLevel({title: 'Other materials considerations', image: null}),
					new SubLevel({title: 'Other material examples', image: null}),
					new SubLevel({title: 'Decoration uses', image: null}),
					new SubLevel({title: 'Performance uses', image: null}),
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

	$scope.changePic = function (url) {
		PreviewImageService.setPreviewImageUrl(url);
	};

	var init = function () {
		$scope.navContents = createContents();
		console.log($scope.navContents);
	};

	init();
});