"use strict";

// Shared Colors Definition
const primary = "#6993FF";
const success = "#1BC5BD";
const info = "#8950FC";
const warning = "#FFA800";
const danger = "#F64E60";

var KTApexChartsDemo = (function () {
  // Private functions

  var _demo1 = function () {
    const apexChart = "#chart_1";
    var options = {
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      chart: {
        height: 404,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
      colors: [primary],
    };

    var chart = new ApexCharts(document.querySelector(apexChart), options);
    chart.render();
  };

  var _demo2 = function () {
    const apexChart = "#chart_2";
    var options = {
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      chart: {
        height: 412,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
      colors: [primary],
    };

    var chart = new ApexCharts(document.querySelector(apexChart), options);
    chart.render();
  };

  var _demo3 = function () {
    const apexChart = "#chart_3";
    var options = {
      series: [
        {
          name: "Selesai",
          data: [44, 55, 57, 56],
        },
        {
          name: "Belum Selesai",
          data: [76, 85, 101, 98],
        },
      ],
      chart: {
        type: "bar",
        height: 423,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Kuisioner Personal",
          "Kuisioner Sejawat",
          "Kuisioner Atasan",
          "Kuisioner Bawahan",
        ],
      },
      yaxis: {
        title: {
          text: "",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "" + val + " Kuisioner";
          },
        },
      },
      colors: [success, danger],
    };

    var chart = new ApexCharts(document.querySelector(apexChart), options);
    chart.render();
  };

  return {
    // public functions
    init: function () {
      _demo1();
      _demo2();
      _demo3();
    
    },
  };
})();

jQuery(document).ready(function () {
  KTApexChartsDemo.init();
});
