'use strict';

describe('Directive: ampMapEllis', function(){
  beforeEach(module('karma-templates'));
  // beforeEach(module('amp.map.ellis'));
  beforeEach(module('amp.map'));


  var element, scope, node, contents;

  element = angular.element('<amp-map-ellis></amp-map-ellis>');

  // beforeEach(inject(function ($templateCache) {
  //   var template = $templateCache.get('template/map/ellis-map.html');
  //   console.log('template: ', template);
  //   console.log(:)
  // }));


  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    node = $compile(element)(scope);
    scope.$digest();

    contents = node.html();


    // console.log('node contents: ', contents);
    // console.log('element: ', element);
    // console.log('element.find: ', element.find('ul'));
  }));

  it('loads the template', function(){
    // expect(contents.css('.template-test').text()).toBe('I exist.');

    // console.log('element.eq(0): ', element.eq(0));
    // console.log('angular.element(element[0]: ', angular.element(element[0]));
    console.log('options: ', element.find('option'));
    // console.log('node.find("select"): ', node.find('.city-template').text());
    // console.log('node == element: ', node === element);



    expect(contents).toContain('I exist.');
  });

  it('defaults to San Francisco map', function(){
    // expect(element.find('div.city-template').text()).toBe('San Francisco');
    var options = element.find('option');
    options.eq(1).click();
    expect(element.find('div.city-template').text()).toContain('San Francisco');
  });

  it('switches between maps on user input', function(){
    // var cities = element.find('ul.nav-pills');

    // cities[1].click();
    // expect(element.find('.city-name').text()).toBe('Los Angeles');

    // cities[2].click();
    // expect(element.find('.city-name').text()).toBe('Santa Monica');
  });
});