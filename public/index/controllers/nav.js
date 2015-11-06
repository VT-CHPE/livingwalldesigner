'use strict';

angular.module('index').controller('NavCtrl', function ($scope, $location, CurrentTopicService) {

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
		this.sections = args.sections;
	}

	function Section (args) {
		this.sectionHeader = args.sectionHeader;
		this.content = args.content;
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
				url: null,
				subs: [
					new SubLevel({isActive: false, title: 'Visual table of contents', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_201510094.jpg"}),
					new SubLevel({isActive: false, title: 'Color theory basics', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_201510097.jpg"}),
					new SubLevel({isActive: false, title: 'Plant Biology basics', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_201510098.jpg"}),
					new SubLevel({isActive: false, title: 'Desigin tatics', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_201510099.jpg"}),
					new SubLevel({isActive: false, title: 'Design tatics 2', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100910.jpg"})
				],
				hasSub: true,
				isCollapsed: true
			})
		);
		contents.topLevels.push(
			new TopLevel({
				title: 'Design Information',
				url: null,
				subs: [
					new SubLevel({
						isActive: false, 
						title: 'Appendicies visualization', 
						image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100935.jpg",
						sections: [
							new Section({sectionHeader: "Color Theory", content: "Color Theory Content"}),
							new Section({sectionHeader: "Plant Biology", content: "Plant Biology Content"}),
							new Section({sectionHeader: "Design Tatics", content: "Design Tatics Content"})
						]
					}),
					new SubLevel({isActive: false, title: 'Framework for review', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100936.jpg"}),
					new SubLevel({isActive: false, title: 'Site Design', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100937.jpg"}),
					new SubLevel({isActive: false, title: 'Pre-Design', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100938.jpg"}),
					new SubLevel({isActive: false, title: 'Schematic Design', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100939.jpg"}),
					new SubLevel({isActive: false, title: 'Ideation', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100940.jpg"}),
					new SubLevel({isActive: false, title: 'Charactersitic Collection', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100941.jpg"}),
					new SubLevel({isActive: false, title: 'Project Criteria', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100942.jpg"}),
					new SubLevel({isActive: false, title: 'Representation', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100943.jpg"}),
					new SubLevel({isActive: false, title: 'Iteration', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100944.jpg"}),
					new SubLevel({isActive: false, title: 'Evaluate Iteration', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100945.jpg"}),
					new SubLevel({isActive: false, title: 'Choose Iteration', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100946.jpg"}),
					new SubLevel({isActive: false, title: 'Implementation', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100947.jpg"}),
					new SubLevel({isActive: false, title: 'Choosing by advantages', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100948.jpg"}),
					new SubLevel({isActive: false, title: 'Studio Method', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100949.jpg"}),
				],
				hasSub: true,
				isCollapsed: true
			})
		);
		contents.topLevels.push(
			new TopLevel({
				title: 'Visual Framework',
				url: null,
				subs: [
					new SubLevel({isActive: false, title: 'Condensed Framework', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_201510095.jpg"}),
					new SubLevel({isActive: false, title: 'Expended Framework', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_201510096.jpg"}),
				],
				hasSub: true,
				isCollapsed: true
			})
		);
		contents.topLevels.push(
			new TopLevel({
				title: 'Topical Considerations',
				url: null,
				subs: [
					new SubLevel({isActive: false, title: 'Hue', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100911.jpg"}),
					new SubLevel({isActive: false, title: 'Color mixture/composition', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100912.jpg"}),
					new SubLevel({isActive: false, title: 'Saturation', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100913.jpg"}),
					new SubLevel({isActive: false, title: 'Value', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100914.jpg"}),
					new SubLevel({isActive: false, title: 'Graphics', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100915.jpg"}),
					new SubLevel({isActive: false, title: 'Plant Species', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100916.jpg"}),
					new SubLevel({isActive: false, title: 'Native vs Non-native', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100917.jpg"}),
					new SubLevel({isActive: false, title: 'Climbing Mechanism', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100918.jpg"}),
					new SubLevel({isActive: false, title: 'Royal Horticulture Society', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100919.jpg"}),
					new SubLevel({isActive: false, title: 'Diagram plant color annually', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100920.jpg"}),
					new SubLevel({isActive: false, title: 'Multiple speices color diagram', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100921.jpg"}),
					new SubLevel({isActive: false, title: 'Hand techniques descriptions', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100922.jpg"}),
					new SubLevel({isActive: false, title: 'Hand techniques examples', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100923.jpg"}),
					new SubLevel({isActive: false, title: 'Computer assisted description', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100924.jpg"}),
					new SubLevel({isActive: false, title: 'Computer assisted examples', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100925.jpg"}),
					new SubLevel({isActive: false, title: 'Computer assisted programs', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100926.jpg"}),
					new SubLevel({isActive: false, title: 'Representation in Architecture', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100927.jpg"}),
					new SubLevel({isActive: false, title: 'Design Criterion/Prompts', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100928.jpg"}),
					new SubLevel({isActive: false, title: 'Masonry material consideration', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100929.jpg"}),
					new SubLevel({isActive: false, title: 'Masonry examples', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100930.jpg"}),
					new SubLevel({isActive: false, title: 'Other materials considerations', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100931.jpg"}),
					new SubLevel({isActive: false, title: 'Other material examples', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100932.jpg"}),
					new SubLevel({isActive: false, title: 'Decoration uses', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100933.jpg"}),
					new SubLevel({isActive: false, title: 'Performance uses', image: "images/lw_res_imgs/Black,K_Appendicesforframework_A_2015100934.jpg"}),
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

	$scope.getUrl = function (topLevel, isSubLevel) {
		var prevUrl = $location.url();
		// console.log('isSubLevel = ' + isSubLevel);
		// console.log('prevUrl = ' + prevUrl);
		if (topLevel.url === null) {
			if (isSubLevel) {
				return '#!/topic';
			}
			return '#!' + prevUrl;
		} else {
			return '#!' + topLevel.url;
		}
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

	$scope.changeSelection = function (newSelect) {
		CurrentTopicService.setSelectedItem(newSelect);
	};

	var init = function () {
		$scope.navContents = createContents();
		console.log($scope.navContents);
	};

	init();
});