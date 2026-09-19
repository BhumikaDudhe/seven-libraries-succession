"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
var react_1 = require("react");
var Footer = function () {
    return (<footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-quote">
              "The archive must outlive its custodian."
            </div>
            <p className="footer-tagline">
              One shared catalogue preserved by seven monasteries across Ladakh and Spiti. 
              Designed so authority can move without the archive stopping.
            </p>
          </div>

          <div>
            <h4 className="footer-col-title">Principles</h4>
            <ul className="footer-list">
              <li>Institutional Autonomy</li>
              <li>Succession by Default</li>
              <li>Content-Addressed Feeds</li>
              <li>Peer Redundancy</li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Monasteries</h4>
            <ul className="footer-list">
              <li>Tabo Monastery</li>
              <li>Leh Goma Library</li>
              <li>Thikse Gonpa</li>
              <li>Lamayuru Vault</li>
              <li>Kee Sanctuary</li>
              <li>Hemis Treasury</li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Preservation Mandate</h4>
            <p style={{ fontSize: '0.84rem', color: 'var(--c-ivory-dark)', lineHeight: 1.6 }}>
              Written using Swarm distributed storage feeds. Storage requires active community 
              stewardship; publishing keys move while immutable hashes remain unchanged.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 1998–2026 Ladakh–Spiti Shared Monastic Council. All rights held in common trust.</span>
          <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--c-sage)' }}>
            SWARM FEED: 0x9df418c991b1a7732a106fbe4312019a84351a90c0ef497c2518e11a8b98132f
          </span>
        </div>
      </div>
    </footer>);
};
exports.Footer = Footer;
