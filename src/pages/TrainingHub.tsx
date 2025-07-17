import { BookOpen, Play, CheckCircle, Clock, Filter, Shield, Fuel, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const TrainingHub = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Safety", "Efficiency", "Maintenance"];

  const trainingModules = [
    {
      id: 1,
      title: "Reducing Idling",
      category: "Efficiency",
      duration: "5 min",
      completion: 100,
      status: "completed",
      description: "Learn techniques to minimize engine idling and improve fuel efficiency",
      icon: Fuel
    },
    {
      id: 2,
      title: "Pre-Start Safety Checks",
      category: "Safety",
      duration: "8 min",
      completion: 100,
      status: "completed",
      description: "Essential safety procedures before operating machinery",
      icon: Shield
    },
    {
      id: 3,
      title: "Load Optimization",
      category: "Efficiency",
      duration: "12 min",
      completion: 60,
      status: "in-progress",
      description: "Maximize productivity through proper load management",
      icon: BookOpen
    },
    {
      id: 4,
      title: "Hydraulic System Maintenance",
      category: "Maintenance",
      duration: "15 min",
      completion: 0,
      status: "not-started",
      description: "Understanding hydraulic system care and troubleshooting",
      icon: Wrench
    },
    {
      id: 5,
      title: "Emergency Procedures",
      category: "Safety",
      duration: "10 min",
      completion: 0,
      status: "not-started",
      description: "Critical emergency response and evacuation procedures",
      icon: Shield
    },
    {
      id: 6,
      title: "Fuel Management",
      category: "Efficiency",
      duration: "7 min",
      completion: 0,
      status: "not-started",
      description: "Best practices for fuel consumption monitoring",
      icon: Fuel
    },
    {
      id: 7,
      title: "Daily Inspection Checklist",
      category: "Maintenance",
      duration: "6 min",
      completion: 80,
      status: "in-progress",
      description: "Comprehensive daily equipment inspection procedures",
      icon: CheckCircle
    },
    {
      id: 8,
      title: "Operator Ergonomics",
      category: "Safety",
      duration: "9 min",
      completion: 0,
      status: "not-started",
      description: "Proper seating, posture, and control techniques",
      icon: Shield
    }
  ];

  const filteredModules = activeFilter === "All" 
    ? trainingModules 
    : trainingModules.filter(module => module.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "success";
      case "in-progress": return "warning";
      case "not-started": return "secondary";
      default: return "secondary";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed": return "Completed";
      case "in-progress": return "In Progress";
      case "not-started": return "Not Started";
      default: return "Unknown";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Safety": return "text-destructive";
      case "Efficiency": return "text-primary";
      case "Maintenance": return "text-warning";
      default: return "text-muted-foreground";
    }
  };

  const totalModules = trainingModules.length;
  const completedModules = trainingModules.filter(m => m.status === "completed").length;
  const overallProgress = (completedModules / totalModules) * 100;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-primary p-6 rounded-lg text-primary-foreground shadow-card">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BookOpen className="h-8 w-8" />
            <div>
              <h1 className="text-2xl font-bold">Training Hub</h1>
              <p className="text-primary-foreground/80">Micro-learning modules for skill development</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-primary-foreground/80">Overall Progress</p>
            <p className="text-2xl font-bold">{Math.round(overallProgress)}%</p>
            <p className="text-sm text-primary-foreground/80">{completedModules}/{totalModules} completed</p>
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-success" />
            <span>Learning Progress</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 border border-border rounded-lg">
              <div className="text-center">
                <Shield className="h-8 w-8 text-destructive mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Safety</p>
                <p className="text-xl font-bold">
                  {trainingModules.filter(m => m.category === "Safety" && m.status === "completed").length}/
                  {trainingModules.filter(m => m.category === "Safety").length}
                </p>
              </div>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <div className="text-center">
                <Fuel className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Efficiency</p>
                <p className="text-xl font-bold">
                  {trainingModules.filter(m => m.category === "Efficiency" && m.status === "completed").length}/
                  {trainingModules.filter(m => m.category === "Efficiency").length}
                </p>
              </div>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <div className="text-center">
                <Wrench className="h-8 w-8 text-warning mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Maintenance</p>
                <p className="text-xl font-bold">
                  {trainingModules.filter(m => m.category === "Maintenance" && m.status === "completed").length}/
                  {trainingModules.filter(m => m.category === "Maintenance").length}
                </p>
              </div>
            </div>
            <div className="p-4 border border-border rounded-lg bg-gradient-primary text-primary-foreground">
              <div className="text-center">
                <BookOpen className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm text-primary-foreground/80">Total</p>
                <p className="text-xl font-bold">{completedModules}/{totalModules}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <div className="flex items-center space-x-2">
        <Filter className="h-5 w-5 text-muted-foreground" />
        <span className="text-sm font-medium">Filter by category:</span>
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={activeFilter === filter ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </Button>
        ))}
      </div>

      {/* Training Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModules.map((module) => (
          <Card key={module.id} className="shadow-card hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <module.icon className={`h-6 w-6 ${getCategoryColor(module.category)}`} />
                  <div>
                    <h3 className="font-semibold text-lg">{module.title}</h3>
                    <Badge variant="outline" className={getCategoryColor(module.category)}>
                      {module.category}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{module.duration}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{module.description}</p>
              
              {/* Progress Bar */}
              {module.completion > 0 && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{module.completion}%</span>
                  </div>
                  <Progress value={module.completion} className="h-2" />
                </div>
              )}

              <div className="flex items-center justify-between">
                <Badge variant={getStatusColor(module.status) as any}>
                  {getStatusText(module.status)}
                </Badge>
                <Button size="sm" className="space-x-2">
                  <Play className="h-4 w-4" />
                  <span>
                    {module.status === "completed" ? "Review" : 
                     module.status === "in-progress" ? "Continue" : "Start Training"}
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TrainingHub;