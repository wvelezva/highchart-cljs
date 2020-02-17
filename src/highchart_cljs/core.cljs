(ns highchart-cljs.core
  (:require [reagent.core :as r]
            [re-frame.core]
            ["highcharts/highstock" :as Highcharts]
            ["highcharts/modules/no-data-to-display"]
            ["highcharts-react-official" :default HighchartsReact]))

(def js-chart (r/atom []))

(def stock-config
  {:credits {:enabled false}
   :title ""
   :rangeSelector {:buttonPosition {:x -200}} ;;to hide the zoom buttons but letting the input dates visible
   :legend {:enabled true}
   :lang {:noData "There are no data to display or there are any Fund Selected"}
   :noData {:style {:fontWeight "bold"
                    :fontSize "15px"
                    :color "#303030"}}
   :plotOptions {:series {:showInLegend true
                          :events {:click #(.log js/console (str "p= " (.. % -point -x) " sn=" (.. % -point -series -name)))}}}
   :tooltip {:pointFormat "{series.name}: <b>{point.y:.1f}%</b>"}
   :series [{:type "line"
             :name "Random data"
             :data []}]})


(defn chart
      []
      [:div
       [:div "Comparison"]
       [:> HighchartsReact {:highcharts      Highcharts
                            :constructorType "stockChart"
                            :options         stock-config}]])

(defn ^:dev/after-load mount-root
  []
  (r/render [chart] (.getElementById js/document "fund-app")))

(defn ^:export init
  []
  (mount-root))
