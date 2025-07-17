import { Clock, CheckCircle, AlertCircle, Fuel, Gauge, Battery, Shield, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const currentTime = new Date().toLocaleString();

  const tasks = [
    { id: 1, name: "Foundation Excavation", eta: "2.5 hrs", progress: 75, status: "On Track" },
    { id: 2, name: "Material Loading", eta: "1.2 hrs", progress: 45, status: "On Track" },
    { id: 3, name: "Site Clearing", eta: "3.1 hrs", progress: 20, status: "Delayed" },
    { id: 4, name: "Concrete Pour Prep", eta: "4.0 hrs", progress: 0, status: "Pending" }
  ];

  const machineData = [
    { label: "Engine Hours", value: "1,247.5", icon: Clock, color: "text-muted-foreground" },
    { label: "Fuel Used", value: "89.2L", icon: Fuel, color: "text-warning" },
    { label: "Load Cycles", value: "156", icon: BarChart3, color: "text-primary" },
    { label: "Idling Time", value: "12 min", icon: Gauge, color: "text-destructive" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "On Track": return "success";
      case "Delayed": return "destructive";
      case "Pending": return "secondary";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Section */}
      <div className="bg-gradient-primary p-6 rounded-lg text-primary-foreground shadow-card">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Welcome, Operator</h1>
            <p className="text-primary-foreground/80 mt-1">Today's Tasks Overview</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-primary-foreground/80">Current Time</p>
            <p className="text-lg font-semibold">{currentTime}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Daily Task List */}
        <div className="lg:col-span-2">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Daily Task List</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tasks.map((task) => (
                  <div key={task.id} className="border border-border rounded-lg p-4 hover:bg-secondary/50 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-foreground">{task.name}</h3>
                        <p className="text-sm text-muted-foreground">ETA: {task.eta}</p>
                      </div>
                      <Badge variant={getStatusColor(task.status) as any}>
                        {task.status}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{task.progress}%</span>
                      </div>
                      <Progress value={task.progress} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Live Machine Data */}
        <div className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Gauge className="h-5 w-5 text-primary" />
                <span>Live Machine Data</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {machineData.map((data, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <data.icon className={`h-5 w-5 ${data.color}`} />
                      <span className="text-sm font-medium">{data.label}</span>
                    </div>
                    <span className="font-bold text-foreground">{data.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Safety Status */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-success" />
                <span>Safety Status</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border border-border rounded-lg bg-success/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                    <span className="text-sm font-medium">Seatbelt</span>
                  </div>
                  <Badge variant="outline" className="text-success border-success">
                    Fastened
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-warning rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Engine Status</span>
                  </div>
                  <Badge variant="outline" className="text-warning border-warning">
                    Running
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Task Time Prediction */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>Time Prediction</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">6.8 hrs</p>
                <p className="text-sm text-muted-foreground">Estimated completion time</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Based on current efficiency and real-time data
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;