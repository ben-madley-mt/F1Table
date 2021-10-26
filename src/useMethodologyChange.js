import { useState } from "react";
import BestRaceTotal from "./api/BestRaceTotal";
import NormalScore from "./api/NormalScore";
import SeasonTotal from "./api/SeasonTotal";
import Utility from './api/Utility';

function useMethodologyChange() {
    const [totaler, setTotaler] = useState(new SeasonTotal())
    const [scorer, setScorer] = useState(new NormalScore(Utility.pointsSystems.top10, 1))
  
    function handleTotalerChange(event) {
      // this.setState({ totalValue: event.target.value });
      switch (event.target.value) {
        case "all":
          setTotaler(new SeasonTotal());
          break;
        case "5":
          setTotaler(new BestRaceTotal(5));
          break;
        case "10":
          setTotaler(new BestRaceTotal(10));
          break;
        default:
          setTotaler(new SeasonTotal());
          break;
      }
    }

    function handleScorerChange(event) {
      // this.setState({ scoreValue: event.target.value });
      switch (event.target.value) {
        case "10fl":
          setScorer(new NormalScore(Utility.pointsSystems.top10, 1));
          break;
        case "10nofl":
          setScorer(new NormalScore(Utility.pointsSystems.top10, 0));
          break;
        case "8":
          setScorer(new NormalScore(Utility.pointsSystems.top8, 0));
          break;
        case "6":
          setScorer(new NormalScore(Utility.pointsSystems.top6, 0));
          break;
        case "6trad":
          setScorer(new NormalScore(Utility.pointsSystems.top6trad, 0));
          break;
        case "5":
          setScorer(new NormalScore(Utility.pointsSystems.top5, 0));
          break;
        case "fl":
          setScorer(new NormalScore(Utility.pointsSystems.none, 1));
          break;
        default:
          setScorer(new NormalScore(Utility.pointsSystems.top10, 1));
          break;
      }
    }
  
  
    return [totaler, scorer, handleTotalerChange, handleScorerChange];
  }
  

  export default useMethodologyChange;