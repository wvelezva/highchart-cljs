(defproject highchart-cljs "0.1.0-SNAPSHOT"
  :source-paths []
  :test-paths []
  :resource-paths []
  :compile-path nil
  :target-path nil
  :plugins [[lein-tools-deps "0.4.1"]]
  :middleware [lein-tools-deps.plugin/resolve-dependencies-with-deps-edn]
  :lein-tools-deps/config {:config-files [:install :user :project]
                           :aliases [:dev]})