---
permalink: /projects/
title: "Projects"
author_profile: true
---

<div class="project-entry" id="reliability-in-tabular-foundation-models">
  <div class="entry-meta">Independent research · May 2026–present</div>
  <h3>Reliability in Tabular Foundation Models</h3>
  <p>Designed and executed a layerwise, cross-model study of high-confidence errors in <a href="https://github.com/PriorLabs/tabpfn" target="_blank" rel="noopener">TabPFN</a>, <a href="https://github.com/soda-inria/tabicl" target="_blank" rel="noopener">TabICLv2</a>, and <a href="https://github.com/layer6ai-labs/TabDPT-inference" target="_blank" rel="noopener">TabDPT</a>, including the pipeline needed to extract and compare their internal representations. Developed and evaluated reliability measures based on class support, nearest-neighbor structure, and class geometry, using confidence matching, permutation tests, distance-metric checks, and cross-model controls.</p>
</div>

<div class="project-entry" id="before-you-tune">
  <div class="entry-meta">With <a href="https://www.civil.iitb.ac.in/~avimaji/" target="_blank" rel="noopener">Avijit Maji</a> · <a href="https://www.iitb.ac.in/" target="_blank" rel="noopener">IIT Bombay</a> · March 2026–present</div>
  <h3>Before You Tune: Predicting Hyperparameter Optimization Outcomes from Data Complexity</h3>
  <p>Formulated tuning gain and optimizer sensitivity as separate pre-HPO prediction problems and developed a data-complexity-based approach for studying both. Designed the optimizer benchmark, complexity analysis, statistical comparisons, robustness tests, and mixed-variable exploratory landscape analysis, and led the interpretation and manuscript preparation.</p>
  <p class="project-links">Manuscript in preparation.</p>
</div>

<div class="project-entry" id="sentence-representations">
  <div class="entry-meta"><a href="https://www.gatech.edu/" target="_blank" rel="noopener">Georgia Tech</a> · 2022</div>
  <h3>Geometric and Neural Pooling Methods for Sentence-BERT</h3>
  <p>Developed neural and geometric alternatives to mean pooling in <a href="https://www.sbert.net/" target="_blank" rel="noopener">Sentence-BERT</a>, including convolutional pooling, Lorentzian sentence embeddings, and alignment–uniformity objectives. Compared Euclidean and hyperbolic variants on semantic textual similarity benchmarks; convolutional pooling substantially improved sentence representations, while the non-Euclidean formulations revealed optimization and numerical-stability constraints.</p>
</div>

<div class="project-entry" id="adaptive-gcn">
  <div class="entry-meta"><a href="https://www.gatech.edu/" target="_blank" rel="noopener">Georgia Tech</a> · 2022</div>
  <h3>Adaptive Dual-Branch Graph Convolutional Networks for Imbalanced Node Classification</h3>
  <p>Developed A-DGCN, a dual-branch graph convolutional architecture that replaces k-nearest-neighbor graph reconstruction with class-frequency resampling and uses a time-varying objective to balance the original and resampled graph branches. Improved on D-GCN for CiteSeer and DBLP, while identifying degradation on PubMed as branch weight shifted toward the resampled graph.</p>
</div>

<div class="project-entry" id="federated-learning">
  <div class="entry-meta"><a href="https://www.gatech.edu/" target="_blank" rel="noopener">Georgia Tech</a> · 2022</div>
  <h3>Manifold Mixup for Personalized Federated Learning</h3>
  <p>Integrated manifold mixup into FedPer to regularize shared representation layers while preserving client-specific personalization. Compared local and aggregated model behavior against unregularized FedPer and identified a failure mode in which mixup degrades performance when client models are aggregated before learning stable local representations.</p>
</div>

<div class="project-entry" id="social-network-simulation">
  <div class="entry-meta"><a href="https://www.gatech.edu/" target="_blank" rel="noopener">Georgia Tech</a> · 2022</div>
  <h3>Agent-Based Simulation of Social-Network Adoption</h3>
  <p>Developed an agent-based model of platform adoption and abandonment that combined individual preferences, social conformity, and sentiment propagation across multiple network topologies. Derived a mean-field approximation and compared it with simulation behavior to study how network structure and local interactions produced global adoption patterns.</p>
</div>

<div class="project-entry" id="traffic-flow-prediction">
  <div class="entry-meta"><a href="https://www.iitb.ac.in/" target="_blank" rel="noopener">IIT Bombay</a> · 2020</div>
  <h3>Long-Horizon Traffic-Flow Prediction with Deep Convolutional Networks</h3>
  <p>Adapted InceptionNet, DenseNet, VGGNet, and shallow convolutional architectures to model spatiotemporal traffic flow at extended prediction horizons. Compared network architectures, optimization methods, and temporal preprocessing strategies, with the strongest deep models substantially outperforming the shallow CNN baseline.</p>
</div>

<div class="project-entry" id="visual-positioning">
  <div class="entry-meta"><a href="https://www.iitb.ac.in/" target="_blank" rel="noopener">IIT Bombay</a> · 2020</div>
  <h3>Hybrid Visual Positioning with Semantic Filtering and Semi-Direct Odometry</h3>
  <p>Designed a visual-positioning framework combining semantic filtering with semi-direct visual odometry to reduce feature-matching outliers and estimate camera motion from photometric consistency. Specified a Bayesian depth-mapping module and an evaluation protocol against ORB-SLAM on the KITTI and ETH benchmarks.</p>
</div>

<div class="project-entry" id="traffic-simulation">
  <div class="entry-meta">With <a href="https://www.civil.iitb.ac.in/~avimaji/" target="_blank" rel="noopener">Avijit Maji</a> and <a href="https://oldwww.iiests.ac.in/index.php/anuj-kishor-budhkar-about" target="_blank" rel="noopener">Anuj Budhkar</a> · <a href="https://www.iitb.ac.in/" target="_blank" rel="noopener">IIT Bombay</a> · 2017–2018</div>
  <h3>Microsimulation and Driving-Simulator Studies of Mixed-Traffic Behavior</h3>
  <p>Designed and calibrated microsimulation and driving-simulator experiments to study merging and post-crash behavior in mixed traffic. Analyzed shockwaves, headways, and platoon dispersion to characterize traffic response across controlled scenarios.</p>
</div>

<div class="project-entry" id="vehicle-behavior">
  <div class="entry-meta">With <a href="https://www.civil.iitb.ac.in/~avimaji/" target="_blank" rel="noopener">Avijit Maji</a> · <a href="https://www.iitb.ac.in/" target="_blank" rel="noopener">IIT Bombay</a> · 2019–2020</div>
  <h3>Machine Learning for Vehicle Speed and Lateral-Position Prediction on Rural Highway Curves</h3>
  <p>Developed a trajectory-processing pipeline to identify inter-vehicle interactions from roadway video and incorporate them into Random Forest models of vehicle speed and lateral position. Analyzed how roadway geometry, trajectory history, and interaction context affected predictions at different locations along highway curves; this work culminated in the undergraduate thesis.</p>
</div>
