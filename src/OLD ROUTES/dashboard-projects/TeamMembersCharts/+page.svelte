<script>
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	export let seriesData,chartsColor,id;
	import {onMount} from 'svelte'; 

	const options = {
		chart: {
			type: 'radialBar',
			width: 36,
			height: 36,
			sparkline: {
				enabled: !0
			}
		},
        series : [seriesData],
		dataLabels: {
			enabled: !1
		},
		plotOptions: {
			radialBar: {
				hollow: {
					margin: 0,
					size: '50%'
				},
				track: {
					margin: 1
				},
				dataLabels: {
					show: !1
				}
			}
		},
		colors: [chartsColor]
	};
	onMount(() => {
		const chart = new ApexCharts(document.querySelector("#teammemberscharts"+id), options)
  		chart.render()
	})
</script>

<div id={"teammemberscharts" + id} class="apex-charts" dir="ltr"></div>