<script>
	import { LayerCake, Svg, Canvas } from 'layercake';
	import { feature } from 'topojson-client';
	import { geoAlbersUsa } from 'd3-geo';
	import { scaleQuantize } from 'd3-scale';

	// For a map example with a tooltip, check out https://layercake.graphics/example/MapSvg

	import MapSvg from '../../components/Map.svg.svelte';
	import MapCanvas from '../../components/Map.canvas.svelte';

	// This example loads json data as json using @rollup/plugin-json
	import usStates from '../../data/us-states.topojson.json';

	const geojson = feature(usStates, usStates.objects.collection);

	// Create a flat array of objects that LayerCake can use to measure
	// extents for the color scale
	const flatData = geojson.features.map(d => d.properties);
	const colors = ['#ffdecc', '#ffc09c', '#ffa06b', '#ff7a33'];
</script>

<style>
	/*
		The wrapper div needs to have an explicit width and height in CSS.
		It can also be a flexbox child or CSS grid element.
		The point being it needs dimensions since the <LayerCake> element will
		expand to fill it.
	*/
	.chart-container {
		width: 100%;
		height: 100%;
	}
</style>

<div class="chart-container">
	<LayerCake
		data={geojson}
		z='FOO'
		zScale={scaleQuantize()}
		zRange={colors}
		{flatData}
	>
		<Canvas>
			<MapCanvas
				projection={geoAlbersUsa}
			/>
		</Canvas>

		<Svg>
			<MapSvg
				projection={geoAlbersUsa}
				features={geojson.features.slice(40, 50)}
			/>
		</Svg>
	</LayerCake>
</div>
