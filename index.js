/**
 * Each of the events that are called on the view
 * and have helper methods created for them.
 */

var lifecycleEvents = [
  'construct',
  'created',
  'ready',
  'mounted',
  'unmounted',
  'destroying',
  'destroyed'
];

module.exports = function(){
  return function(View) {
    lifecycleEvents.forEach(function(name){
      View[name] = function(fn){
        View.on(name, function(view, args){
          fn.apply(view, args);
        });
      };
    });
  };
};