const trianglify = require('trianglify')
    const fs = require('fs')
    const pattern = trianglify({
      cellSize: 50,
      width: window.innerWidth * 0.8,
      height: (window.innerHeight - 4 * 30) / 4
    })

    // Render to SVG
    document.body.appendChild(pattern.toSVG())
    // Render to Canvas
    document.body.appendChild(pattern.toCanvas())

    // stroke-only
    const strokeOnly = trianglify({
      cellSize: 75,
      width: window.innerWidth * 0.8,
      height: (window.innerHeight - 4 * 30) / 4,
      fill: false,
      strokeWidth: 1
    })
    document.body.appendChild(strokeOnly.toSVG())
    document.body.appendChild(strokeOnly.toCanvas())