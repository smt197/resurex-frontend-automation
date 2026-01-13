export interface UserStats {
  total_users: number;
  recent_users: number;
  change_percentage: number;
}

// Interface exemple pour les données historiques d'utilisateurs
export interface UserHistoricalDataPoint {
  date: string;
  uniqueUsers: number; // MODIFIÉ DE count à uniqueUsers
}

// Votre UserStats pourrait être étendu ou vous auriez une nouvelle réponse d'API
export interface UserStatsWithHistory extends UserStats {
  historical_data?: UserHistoricalDataPoint[]; // MODIFIÉ DE historicalData à historical_data
}