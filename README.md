# lifecycle

Simple methods for binding to lifecycle events for ripple.

Instead of:

```js
View.on('created', function(view){
    view.set('foo', 'bar');
})
```

You can do:

```js
View.created(function(){
    this.set('foo', 'bar');
});
```

## Available Methods

* construct
* created
* ready
* mounted
* unmounted
* destroying
* destroyed