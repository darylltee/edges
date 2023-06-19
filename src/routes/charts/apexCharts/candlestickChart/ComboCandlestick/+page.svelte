<script>
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import { browser } from "$app/environment";
	import { onMount } from "svelte";
	import allseries from "../../series";

	export let dataColors;
	function getChartColorsArray(colors) {
		if (browser) {
			return colors.map(function (value) {
				var newValue = value.replace(" ", "");
				if (newValue.indexOf(",") === -1) {
					var color = getComputedStyle(
						document.documentElement
					).getPropertyValue(newValue);
					if (color.indexOf("#") !== -1) color = color.replace(" ", "");
					if (color) return color;
					else return newValue;
				} else {
					var val = value.split(",");
					if (val.length === 2) {
						var rgbaColor = getComputedStyle(
							document.documentElement
						).getPropertyValue(val[0]);
						rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
						return rgbaColor;
					} else {
						return newValue;
					}
				}
			});
		}
	}

	onMount(() => {
		var chartCandlestickBasicColors = getChartColorsArray(dataColors);

		var options = {
			chart: {
				type: "candlestick",
				height: 200,
				id: "candles",
				toolbar: {
					autoSelected: "pan",
					show: false,
				},
				zoom: {
					enabled: false,
				},
			},
			series: [
				{
					data: allseries.seriesData1,
				},
			],
			plotOptions: {
				candlestick: {
					colors: {
						upward: chartCandlestickBasicColors[0],
						downward: chartCandlestickBasicColors[1],
					},
				},
			},
			xaxis: {
				type: "datetime",
			},
		};
		const chart = new ApexCharts(
			document.querySelector("#combocandlestick"),
			options
		);
		chart.render();
	});
</script>

<div id="combocandlestick" class="apex-charts" dir="ltr" />
