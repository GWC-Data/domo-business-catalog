/* eslint-disable no-mixed-operators */
 
import { useEffect } from "react";
import "./style.css";
const Quality = () => {

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      let oldId: number | null = null;
    
      const tabLinks = document.querySelectorAll(".tabs-controls__link");
      const cards = document.querySelectorAll(".card");
    
      tabLinks.forEach((link) => {
        
        link.addEventListener("click", function (e) {
          e.preventDefault();
          
          // Check if the clicked tab is already active
          if (link.classList.contains("tabs-controls__link--active")) {
            return;
          }
    
          const currentId = parseInt(link.getAttribute("data-id") ?? "", 10);
    
          // Remove active class from all tabs and add to the current tab
          document.querySelector(".tabs-controls__link--active")?.classList.remove("tabs-controls__link--active");
          link.classList.add("tabs-controls__link--active");
    
          if (oldId !== null && currentId < oldId) {
            // Reveal cards when navigating to a previous tab
            const timing = Array.from(cards).filter((card) => card.classList.contains("hidden")).length * 100;
    
            cards.forEach((card, index) => {
              if (index >= currentId - 1) {
                setTimeout(() => {
                  card.classList.remove("hidden");
                }, timing - index * 100);
              }
            });
          } else {
            // Hide cards when navigating to a next tab
            cards.forEach((card, index) => {
              if (index < currentId - 1) {
                setTimeout(() => {
                  card.classList.add("hidden");
                }, index * 100);
              }
            });
          }
    
          oldId = currentId;
        });
      });
    });
  }, []);
  

  return (
    <div className="container mt-5">
      <div>
        <h4>Scrap and Defect Analysis</h4>
        <p>Maintain product excellence by monitoring quality metrics and driving continuous improvement.
        </p>
      </div>
      <section className="page">
        <section>
          <ul className="tabs-controls">
            <li className="tabs-controls__item">
              <div className="tabs-controls__link tabs-controls__link--active" data-id="1">
              Scrap Analysis
              </div>
            </li>
            <li className="tabs-controls__item">
              <div className="tabs-controls__link" data-id="2">
              Defect Rate Analysis</div>
            </li>
            <li className="tabs-controls__item">
              <div className="tabs-controls__link" data-id="3">
              First Pass Yield (FPY)
              </div>
            </li>
            <li className="tabs-controls__item">
              <div className="tabs-controls__link" data-id="4">
              Root Cause Analysis
              </div>
            </li>
          </ul>
        </section>
        <section className="cards-container">
          <div className="card card--current" id="1">
            <h5>Scrap Analysis</h5>
            <p>
            Analyze scrap data to minimize waste and control costs.
            </p>
            <ul className="list-unstyled mb-0">
              <li className="text text-size-18">
                <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                Reduce scrap rate across production lines.
              </li>
              <li className="text text-size-18">
                <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                Lower the cost of scrap materials.
              </li>
              <li className="text text-size-18">
                <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                Identify high-scrap production lines for targeted improvement.
              </li>
            </ul>
          </div>
          <div className="card" id="2">
            <h5>Defect Rate Analysis</h5>
            <p>
            Track and resolve defects to enhance product quality and efficiency.
            </p>
            <ul className="list-unstyled mb-0">
              <li className="text text-size-18">
                <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                Decrease overall defect rates.
              </li>
              <li className="text text-size-18">
                <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                Identify and categorize defect types.
              </li>
              <li className="text text-size-18">
                <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                Monitor defects by shift and production line for actionable insights.
              </li>
            </ul>
          </div>
          <div className="card" id="3">
            <h5>First Pass Yield (FPY)</h5>
            <p>
            Maximize first-pass success rates to reduce rework and improve efficiency.
            </p>
            <ul className="list-unstyled mb-0">
              <li className="text text-size-18">
                <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                Improve FPY rates across products.
              </li>
              <li className="text text-size-18">
                <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                Lower rework and associated costs.
              </li>
              <li className="text text-size-18">
                <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                Optimize yield performance by product type.
              </li>
            </ul>
          </div>
          <div className="card" id="4">
            <h5>Root Cause Analysis</h5>
            <p>
            Identify and eliminate the root causes of recurring issues.
            </p>
            <ul className="list-unstyled mb-0">
              <li className="text text-size-18">
                <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                Increase root cause identification rates.
              </li>
              <li className="text text-size-18">
                <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                Reduce time to resolution for quality problems.
              </li>
              <li className="text text-size-18">
                <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                Minimize recurrence of quality issues.
              </li>
            </ul>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Quality;