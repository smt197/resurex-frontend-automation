// src/app/config/chart-config.service.ts
import { Injectable } from '@angular/core';
import { ApexOptions } from 'src/@vex/components/vex-chart/vex-chart.component';
import { defaultChartOptions } from '@vex/utils/default-chart-options';

// Chart height constants
export const CHART_HEIGHT_SMALL = 100;
export const CHART_HEIGHT_MEDIUM = 150;
export const CHART_HEIGHT_LARGE = 384;
export const CHART_HEIGHT_XLARGE = 400;

// Chart colors
export const CHART_COLOR_PRIMARY = '#008ffb';
export const CHART_COLOR_SUCCESS = '#00e396';
export const CHART_COLOR_WARNING = '#ff9800';

// Other constants
export const SNACKBAR_DURATION = 3000;
export const CHART_UPDATE_DELAY = 50;
export const CHART_STABILITY_DELAY = 100;

/**
 * Service providing ApexCharts configuration templates
 */
@Injectable({
  providedIn: 'root'
})
export class ChartConfigService {
  /**
   * Get configuration for line chart with datetime x-axis
   */
  getLineChartOptions(height: number = CHART_HEIGHT_LARGE): ApexOptions {
    return defaultChartOptions({
      chart: {
        type: 'line',
        height: height,
        zoom: {
          enabled: false
        }
      },
      colors: [CHART_COLOR_WARNING],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      markers: {
        size: 4
      },
      xaxis: {
        type: 'datetime',
        labels: {
          show: true,
          datetimeUTC: false,
          format: 'dd MMM'
        },
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: true
        },
        tooltip: {
          enabled: false
        }
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          formatter: function (value) {
            return value?.toFixed(0) || '0';
          }
        }
      },
      tooltip: {
        enabled: true,
        x: {
          format: 'dd MMM yyyy'
        }
      },
      grid: {
        show: true,
        borderColor: '#e0e0e0',
        strokeDashArray: 4,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        }
      }
    });
  }

  /**
   * Get configuration for bar chart
   */
  getBarChartOptions(height: number = CHART_HEIGHT_SMALL): ApexOptions {
    return defaultChartOptions({
      chart: {
        type: 'bar',
        height: height
      }
    });
  }

  /**
   * Get configuration for pie chart
   */
  getPieChartOptions(height: number = CHART_HEIGHT_LARGE): ApexOptions {
    return {
      chart: {
        height: height,
        type: 'pie'
      },
      colors: [CHART_COLOR_PRIMARY, CHART_COLOR_SUCCESS],
      legend: {
        show: true,
        floating: true,
        fontSize: '14px',
        position: 'left',
        offsetX: 50,
        offsetY: 15,
        labels: {
          useSeriesColors: true
        },
        itemMargin: {
          vertical: 3
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false
            }
          }
        }
      ]
    };
  }

  /**
   * Get configuration for radial bar chart
   */
  getRadialBarChartOptions(height: number = CHART_HEIGHT_LARGE): ApexOptions {
    return {
      chart: {
        height: height,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: '30%',
            background: 'transparent',
            image: undefined
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              show: false
            }
          }
        }
      },
      colors: [CHART_COLOR_PRIMARY, CHART_COLOR_SUCCESS],
      legend: {
        show: true,
        floating: true,
        fontSize: '14px',
        position: 'left',
        offsetX: 50,
        offsetY: 15,
        labels: {
          useSeriesColors: true
        },
        itemMargin: {
          vertical: 3
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false
            }
          }
        }
      ]
    };
  }

  /**
   * Get enhanced line chart options with detailed configuration
   */
  getEnhancedLineChartOptions(
    height: number = CHART_HEIGHT_XLARGE,
    tickAmount: number = 6
  ): ApexOptions {
    return {
      chart: {
        type: 'line',
        height: height,
        animations: {
          enabled: true
        },
        redrawOnParentResize: true,
        redrawOnWindowResize: true
      },
      colors: [CHART_COLOR_WARNING],
      dataLabels: { enabled: false },
      stroke: { curve: 'smooth', width: 2 },
      markers: { size: 4 },
      xaxis: {
        type: 'datetime',
        tickAmount: tickAmount,
        labels: {
          show: true,
          datetimeUTC: false,
          format: 'dd MMM',
          hideOverlappingLabels: false,
          rotate: -70,
          rotateAlways: true,
          trim: false,
          style: {
            fontSize: '9px'
          }
        },
        axisBorder: { show: true },
        axisTicks: { show: true }
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          formatter: function (value) {
            return value?.toFixed(0) || '0';
          }
        },
        min: 0
      },
      tooltip: {
        enabled: true
      },
      grid: {
        show: true,
        borderColor: '#e0e0e0',
        strokeDashArray: 4,
        xaxis: { lines: { show: false } },
        yaxis: { lines: { show: true } }
      }
    };
  }
}
