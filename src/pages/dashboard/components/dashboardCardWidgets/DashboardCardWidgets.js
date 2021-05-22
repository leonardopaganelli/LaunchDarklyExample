import UserBaseGrowth from "../userBaseGrowth/UserBaseGrowth";
import TrafficValues from "../trafficValues/TrafficValues";
import RandomValues from "../randomValues/RandomValues";
import Messages from "../messages/Messages";
import MarketStats from "../marketStats/MarketStats";
import CalendarWidget from "../calendarWidget/CalendarWidget";

const dashboardCardWidgets = [
  {
    component: UserBaseGrowth,
    flag: "dashboardShowUserBaseGrowthCard",
  },
  {
    component: TrafficValues,
    flag: "dashboardShowTrafficValueCard",
  },
  {
    component: RandomValues,
    flag: "dashboardShowRandomValuesCard",
  },
  {
    component: Messages,
    flag: "dashboardShowMessagesCard",
  },
  {
    component: MarketStats,
    flag: "dashboardShowMarketStatsCard",
  },
  {
    component: CalendarWidget,
    flag: "dashboardShowCalendarCard",
  },
];

export default dashboardCardWidgets;
