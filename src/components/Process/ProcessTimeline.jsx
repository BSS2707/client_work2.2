import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  FiSearch, 
  FiCompass, 
  FiLayers, 
  FiSend, 
  FiTrendingUp, 
  FiCheckCircle, 
  FiClock, 
  FiZap 
} from 'react-icons/fi';
import './ProcessTimeline.scss';

const processSteps = [
  {
    num: '01',
    phase: 'PHASE 01',
    stage: 'DISCOVER',
    category: 'DIAGNOSTICS & AUDIT',
    subtitle: 'Audience & Market Diagnostics',
    description: 'We dismantle your existing brand mechanics, analyze competitive vulnerabilities, and isolate the exact high-leverage growth drivers primed for maximum conversion velocity.',
    deliverables: ['Competitor Gap Analysis', 'Funnel Teardown', 'Persona Matrix', 'Growth Levers Map'],
    keyOutput: 'Comprehensive Growth Blueprint & Opportunity Matrix',
    duration: 'Week 1 - 2',
    highlightMetric: '100% Data Backed',
    icon: <FiSearch />
  },
  {
    num: '02',
    phase: 'PHASE 02',
    stage: 'STRATEGIZE',
    category: 'GROWTH BLUEPRINT',
    subtitle: 'Architecture & Multi-Channel Roadmaps',
    description: 'We construct a bulletproof growth architecture combining creative positioning, multi-channel distribution pipelines, and precision performance KPI benchmarks.',
    deliverables: ['Omnichannel Go-To-Market', 'Unit Economics Model', 'Content Strategy Engine', 'KPI Benchmarking'],
    keyOutput: 'Engineered Growth Roadmap & Distribution Plan',
    duration: 'Week 3 - 4',
    highlightMetric: 'Cross-Channel Sync',
    icon: <FiCompass />
  },
  {
    num: '03',
    phase: 'PHASE 03',
    stage: 'CREATE',
    category: 'PRODUCTION & POLISH',
    subtitle: 'High-Impact Production & Design',
    description: 'From viral short-form assets to bleeding-edge web platforms and high-converting ad hooks, we produce world-class creative that commands digital attention.',
    deliverables: ['High-CTR Hook Frameworks', 'Bespoke Motion & 3D UI', 'Conversion Landing Pages', 'Ad Creative Suite'],
    keyOutput: 'High-Converting Digital Assets & Platform Suite',
    duration: 'Week 5 - 7',
    highlightMetric: 'Hyper-Engaging UI',
    icon: <FiLayers />
  },
  {
    num: '04',
    phase: 'PHASE 04',
    stage: 'LAUNCH',
    category: 'OMNICHANNEL DEPLOYMENT',
    subtitle: 'Synchronized Targeted Deployment',
    description: 'We orchestrate synchronized omnichannel launches, turning audience interest into explosive traction and immediate revenue momentum with live telemetry tracking.',
    deliverables: ['Precision Paid Media', 'Conversion Tracking Setup', 'Influencer Amplification', 'Real-Time Telemetry'],
    keyOutput: 'Synchronized Market Launch & Acquisition Pipeline',
    duration: 'Week 8',
    highlightMetric: 'Live Telemetry',
    icon: <FiSend />
  },
  {
    num: '05',
    phase: 'PHASE 05',
    stage: 'GROW',
    category: 'COMPOUNDING SCALE',
    subtitle: 'Iterative Scale & Market Domination',
    description: 'Through data-driven optimization loops, relentless creative testing, and funnel expansion, we turn initial wins into compounding market leadership.',
    deliverables: ['ROAS Multiplier Loops', 'Continuous A/B Experimentation', 'LTV Expansion Engine', 'Retention Optimization'],
    keyOutput: 'Compounding Scalable Growth Engine & Moat',
    duration: 'Ongoing',
    highlightMetric: '3.4x ROI Compound',
    icon: <FiTrendingUp />
  }
];

const ProcessTimeline = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="process-timeline-section" ref={containerRef} id="process">
      <div className="container">
        {/* Futuristic Section Header */}
        <div className="timeline-header">
          <motion.div 
            className="timeline-badge"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="pulse-indicator" />
            <span>THE GROWTH PROTOCOL // 01 - 05</span>
          </motion.div>
          <motion.h2 
            className="editorial-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            THE EXECUTION <span className="highlight-text">ENGINE</span>
          </motion.h2>
          <motion.p 
            className="timeline-subtitle-desc"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A high-velocity, 5-phase growth framework engineered to transform ambitious brands into compounding market leaders.
          </motion.p>
        </div>

        <div className="timeline-wrapper">
          {/* Luminous Background Track & Animated Fill Line */}
          <div className="timeline-vertical-track">
            <div className="timeline-track-glow" />
            <motion.div
              className="timeline-vertical-fill"
              style={{ scaleY, transformOrigin: 'top' }}
            />
          </div>

          <div className="timeline-steps-list">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 1;
              return (
                <motion.div
                  key={step.num}
                  className={`timeline-step-item ${isEven ? 'step-right' : 'step-left'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {/* Central Node Indicator with Halo Rings */}
                  <div className="timeline-node">
                    <div className="node-halo" />
                    <div className="node-outer-ring">
                      <span className="node-core" />
                    </div>
                    <span className="node-num-tag">{step.num}</span>
                  </div>

                  {/* Horizontal Connector Circuit Arm (Desktop) */}
                  <div className="timeline-connector">
                    <span className="connector-dot" />
                  </div>

                  {/* Step Card with Sleek Glassmorphism & Cyber Aesthetics */}
                  <div className="step-card">
                    {/* Background Translucent Watermark Number */}
                    <div className="card-watermark">{step.num}</div>

                    {/* Top Status & Meta Header */}
                    <div className="card-meta-bar">
                      <div className="phase-pill">
                        <span className="phase-icon">{step.icon}</span>
                        <span className="phase-text">{step.phase}</span>
                        <span className="phase-sep">//</span>
                        <span className="category-text">{step.category}</span>
                      </div>
                      <div className="duration-pill">
                        <FiClock className="clock-icon" />
                        <span>{step.duration}</span>
                      </div>
                    </div>

                    {/* Stage Title */}
                    <div className="step-header">
                      <h3 className="step-stage">
                        <span className="stage-num-prefix">{step.num}. </span>
                        {step.stage}
                      </h3>
                      <span className="metric-pill">
                        <FiZap className="zap-icon" />
                        {step.highlightMetric}
                      </span>
                    </div>

                    <h4 className="step-subtitle">{step.subtitle}</h4>
                    <p className="step-desc">{step.description}</p>

                    {/* Deliverable Tags Grid */}
                    <div className="step-deliverables">
                      <span className="deliverables-label">Core Deliverables:</span>
                      <div className="tags-flex">
                        {step.deliverables.map((item, dIdx) => (
                          <span key={dIdx} className="deliverable-tag">
                            <span className="tag-dot" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Milestone Output Bar */}
                    <div className="step-output-bar">
                      <FiCheckCircle className="output-icon" />
                      <div className="output-text">
                        <span className="output-label">Key Milestone:</span>
                        <span className="output-val">{step.keyOutput}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
