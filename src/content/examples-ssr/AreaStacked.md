Stack area charts using D3's [stack](https://github.com/d3/d3-shape#stacks) function. Because this will create a nested data structure, we use LayerCake's `flatten` function and the `flatData` option from which we measure the extents.