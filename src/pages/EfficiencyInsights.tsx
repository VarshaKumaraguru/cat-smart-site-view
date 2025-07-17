import { BarChart3, TrendingUp, Fuel, Clock, Target, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const EfficiencyInsights = () => {
  const efficiencyScore = 87;
  
  const metrics = [
    { label: "Fuel Efficiency", value: 92, trend: "+5%", color: "success" },
    { label: "Load Optimization", value: 84, trend: "+2%", color: "success" },
    { label: "Idle Time Control", value: 78, trend: "-3%", color: "warning" },
    { label: "Cycle Time", value: 90, trend: "+8%", color: "success" }
  ];

  const recommendations = [
    {
      id: 1,
      type: "Fuel Savings",
      message: "Reduce idling by 20% to save 15.2L/week",
      priority: "high",
      savings: "€127/week",
      icon: Fuel
    },
    {
      id: 2,
      type: "Safety",
      message: "Fasten seatbelt to improve safety compliance to 100%",
      priority: "high",
      savings: "Risk reduction",
      icon: Target
    },
    {
      id: 3,
      type: "Efficiency",
      message: "Optimize load cycles to increase productivity by 12%",
      priority: "medium",
      savings: "2.3 hrs/day",
      icon: BarChart3
    },
    {
      id: 4,
      type: "Maintenance",
      message: "Schedule hydraulic service to maintain peak performance",
      priority: "low",
      savings: "Preventive",
      icon: Clock
    }
  ];

  const weeklyData = [
    { day: "Mon", fuelUsed: 95, loadCycles: 120, efficiency: 85 },
    { day: "Tue", fuelUsed: 88, loadCycles: 135, efficiency: 88 },
    { day: "Wed", fuelUsed: 92, loadCycles: 128, efficiency: 86 },
    { day: "Thu", fuelUsed: 87, loadCycles: 142, efficiency: 90 },
    { day: "Fri", fuelUsed: 89, loadCycles: 138, efficiency: 89 },
    { day: "Sat", fuelUsed: 85, loadCycles: 145, efficiency: 92 },
    { day: "Sun", fuelUsed: 91, loadCycles: 132, efficiency: 87 }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "warning";
      case "low": return "secondary";
      default: return "secondary";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-success";
    if (score >= 75) return "text-warning";
    return "text-destructive";
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-primary p-6 rounded-lg text-primary-foreground shadow-card">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <TrendingUp className="h-8 w-8" />
            <div>
              <h1 className="text-2xl font-bold">Efficiency Insights</h1>
              <p className="text-primary-foreground/80">Performance analytics and optimization recommendations</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-primary-foreground/80">Efficiency Score</p>
            <p className={`text-4xl font-bold ${getScoreColor(efficiencyScore)}`}>
              {efficiencyScore}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Efficiency Metrics */}
        <div className="lg:col-span-2">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <span>Performance Metrics</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{metric.label}</span>
                      <Badge 
                        variant="outline" 
                        className={
                          metric.color === 'success' ? 'text-success border-success' :
                          metric.color === 'warning' ? 'text-warning border-warning' :
                          'text-destructive border-destructive'
                        }
                      >
                        {metric.trend}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-2xl font-bold">{metric.value}%</span>
                      </div>
                      <Progress value={metric.value} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Weekly Performance Chart */}
          <Card className="shadow-card mt-6">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <span>Weekly Performance Overview</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyData.map((day, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 border border-border rounded-lg">
                    <div className="w-12 text-sm font-medium text-center">{day.day}</div>
                    <div className="flex-1 grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Fuel: </span>
                        <span className="font-semibold">{day.fuelUsed}L</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Cycles: </span>
                        <span className="font-semibold">{day.loadCycles}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Efficiency: </span>
                        <span className={`font-semibold ${getScoreColor(day.efficiency)}`}>
                          {day.efficiency}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recommendations Panel */}
        <div>
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="h-5 w-5 text-warning" />
                <span>Recommendations</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendations.map((rec) => (
                  <div 
                    key={rec.id} 
                    className="p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-start space-x-3">
                      <rec.icon className="h-5 w-5 text-primary mt-1" />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-sm font-semibold">{rec.type}</span>
                          <Badge variant={getPriorityColor(rec.priority) as any} className="text-xs">
                            {rec.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{rec.message}</p>
                        <div className="text-xs text-primary font-semibold">
                          Potential savings: {rec.savings}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Site Benchmarks */}
          <Card className="shadow-card mt-6">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-primary" />
                <span>Site Benchmarks</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 border border-border rounded-lg">
                  <span className="text-sm">Your Performance</span>
                  <span className="font-bold text-primary">87%</span>
                </div>
                <div className="flex justify-between items-center p-3 border border-border rounded-lg">
                  <span className="text-sm">Site Average</span>
                  <span className="font-bold text-muted-foreground">79%</span>
                </div>
                <div className="flex justify-between items-center p-3 border border-border rounded-lg bg-success/10">
                  <span className="text-sm">Top Performer</span>
                  <span className="font-bold text-success">94%</span>
                </div>
                <div className="text-center pt-2">
                  <Badge variant="outline" className="text-success border-success">
                    +8% above average
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EfficiencyInsights;