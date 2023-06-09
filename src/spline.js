/**
 * Sample for Spline series
 */
import * as React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, AnnotationsDirective, AnnotationDirective, ChartAnnotation, Legend, Category, SplineSeries, Tooltip, Highlight } from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
export let data1 = [
    { x: 'Sun', y: 15 }, { x: 'Mon', y: 22 },
    { x: 'Tue', y: 32 },
    { x: 'Wed', y: 31 },
    { x: 'Thu', y: 29 }, { x: 'Fri', y: 24 },
    { x: 'Sat', y: 18 },
];
export let data2 = [
    { x: 'Sun', y: 10 }, { x: 'Mon', y: 18 },
    { x: 'Tue', y: 28 },
    { x: 'Wed', y: 28 },
    { x: 'Thu', y: 26 }, { x: 'Fri', y: 20 },
    { x: 'Sat', y: 15 }
];
export let data3 = [
    { x: 'Sun', y: 2 }, { x: 'Mon', y: 12 },
    { x: 'Tue', y: 22 },
    { x: 'Wed', y: 23 },
    { x: 'Thu', y: 19 }, { x: 'Fri', y: 13 },
    { x: 'Sat', y: 8 },
];
const SAMPLE_CSS = `
     .control-fluid {
         padding: 0px !important;
     }
     #charts_Series_0_Point_2_Symbol {
         -webkit-animation: opac 1s ease-out infinite;
         animation: opac 1s ease-out infinite;
     }
 
     #charts_Series_2_Point_0_Symbol {
         -webkit-animation: opac 1s ease-out infinite;
         animation: opac 1s ease-in-out infinite;
     }
 
     @keyframes opac {
         0% {
             stroke-opacity: 1;
             stroke-width: 0px;
         }
         100% {
             stroke-opacity: 0;
             stroke-width: 10px;
         }
     }`;
function Spline() {
    let chartInstance;
    return (<div className='control-pane'>
            <style>
                {SAMPLE_CSS}
            </style>
            <div className='control-section'>
                <ChartComponent id='charts' style={{ textAlign: "center" }} ref={charts => chartInstance = charts} primaryXAxis={{
            valueType: 'Category', interval: 1, majorGridLines: { width: 0 }, labelIntersectAction: 'Rotate90', majorTickLines: { width: 0 }, minorTickLines: { width: 0 }
        }} width={Browser.isDevice ? '100%' : '75%'} legendSettings={{ enableHighlight: true }} chartArea={{ border: { width: 0 } }} load={load.bind(this)} primaryYAxis={{
            labelFormat: '{value}°C', lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }
        }} tooltip={{ enable: true }} title='NC Weather Report - 2016' loaded={onChartLoad.bind(this)} animationComplete={animationComplete.bind(this)}>
                    <Inject services={[SplineSeries, Legend, Category, Tooltip, ChartAnnotation, Highlight]}/>
                    <AnnotationsDirective>
                        <AnnotationDirective content='<div id="chart_cloud"><img src="src/chart/images/cloud.png" style={{width: "41px"; height: "41px"}} /></div>' x='Sun' y={2} coordinateUnits='Point' verticalAlignment='Top'>
                        </AnnotationDirective>
                        <AnnotationDirective content='<div id="chart_cloud"><img src="src/chart/images/sunny.png"   style={{width: "41px"; height: "41px"}}/></div>' x='Tue' y={33} coordinateUnits='Point' verticalAlignment='Top'>
                        </AnnotationDirective>
                    </AnnotationsDirective>
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={data1} xName='x' yName='y' width={2} name='Max Temp' type='Spline' marker={{ visible: true, width: 7, height: 7 }}>
                        </SeriesDirective>
                        <SeriesDirective dataSource={data2} xName='x' yName='y' width={2} name='Avg Temp' type='Spline' marker={{ visible: true, width: 7, height: 7 }}>
                        </SeriesDirective>
                        <SeriesDirective dataSource={data3} xName='x' yName='y' width={2} name='Min Temp' type='Spline' marker={{ visible: true, width: 7, height: 7 }}>
                        </SeriesDirective>
                    </SeriesCollectionDirective>
                </ChartComponent>
                <div style={{ float: 'right', marginRight: '10px' }}>Source: &nbsp;
                    <a href="http://www.worldweatheronline.com/mooresville-weather/north-carolina/us.aspx" target="_blank">www.worldweatheronline.com</a>
                </div>
            </div>
        </div>);
    function onChartLoad(args) {
        let chart = document.getElementById('charts');
        chart.setAttribute('title', '');
    }
    ;
    function animationComplete(args) {
        chartInstance.removeSvg();
        chartInstance.animateSeries = false;
        chartInstance['renderElements']();
    }
    ;
    function load(args) {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
    }
    ;
}
export default Spline;