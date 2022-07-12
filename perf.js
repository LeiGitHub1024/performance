
new PerformanceObserver((list) => {
  const lcpEntry = list.getEntries().at(-1);
  console.log('lcpEntry',lcpEntry)
  const navEntry = performance.getEntriesByType('navigation' )[0];
  const resEntries = performance.getEntriesByType('resource');
  const lcpResEntry = resEntries.filter((e)=>e.name===lcpEntry.url)[0]

  const docTTFB = navEntry.responseStart;
  const lcpRequestStart = Math.max(docTTFB,lcpResEntry?lcpResEntry.requestStart:0)
  const lcpRequestEnd = Math.max(lcpRequestStart, lcpResEntry?lcpResEntry.responseEnd:0)
  const lcpRenderTime = Math.max(lcpRequestEnd,lcpEntry?lcpEntry.startTime:0)

  console.log(docTTFB)
  console.log('lcp',lcpRenderTime,lcpEntry.element)  
  console.log('document_ttfb',docTTFB)
  console.log('resource_load_delay',lcpRequestStart-docTTFB)
  console.log('resource_load_time',lcpRequestEnd-lcpRequestStart)
  console.log('element_render_delay',lcpRenderTime-lcpRequestEnd)

  performance.measure('document_ttfb',{start:0,end:docTTFB})
  performance.measure('resource_load_delay',{start:docTTFB,end:lcpRequestStart})
  performance.measure('resource_load_time',{start:lcpRequestStart,end:lcpRequestEnd})
  performance.measure('element_render_delay',{start:lcpRequestEnd-0.01,end:lcpRenderTime-0.01})

}).observe({type: 'largest-contentful-paint', buffered: true});