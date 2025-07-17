import { AlertTriangle, Shield, Clock, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

const SafetyMonitor = () => {
  const safetyAlerts = [
    { id: 1, type: "Seatbelt", message: "Seatbelt unfastened", severity: "high", time: "2 min ago", status: "active" },
    { id: 2, type: "Idling", message: "Excessive idling detected", severity: "medium", time: "15 min ago", status: "active" },
    { id: 3, type: "Speed", message: "Speed limit exceeded in zone B", severity: "high", time: "1 hr ago", status: "resolved" }
  ];

  const complianceData = [
    { metric: "Seatbelt Compliance", percentage: 94, color: "success" },
    { metric: "Idling Compliance", percentage: 78, color: "warning" },
    { metric: "Speed Compliance", percentage: 96, color: "success" },
    { metric: "Pre-Start Checks", percentage: 100, color: "success" }
  ];

  const incidentLog = [
    { id: 1, timestamp: "2024-07-17 14:30", type: "Seatbelt Violation", status: "resolved", duration: "5 min" },
    { id: 2, timestamp: "2024-07-17 13:15", type: "Excessive Idling", status: "resolved", duration: "12 min" },
    { id: 3, timestamp: "2024-07-17 11:45", type: "Speed Violation", status: "resolved", duration: "2 min" },
    { id: 4, timestamp: "2024-07-17 10:20", type: "Emergency Stop", status: "resolved", duration: "8 min" },
    { id: 5, timestamp: "2024-07-17 09:30", type: "Pre-Start Check Missing", status: "resolved", duration: "3 min" }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "destructive";
      case "medium": return "warning";
      case "low": return "secondary";
      default: return "secondary";
    }
  };

  const getComplianceColor = (percentage: number) => {
    if (percentage >= 95) return "success";
    if (percentage >= 80) return "warning";
    return "destructive";
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-dark p-6 rounded-lg text-white shadow-card">
        <div className="flex items-center space-x-3">
          <Shield className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-2xl font-bold">Safety Monitor</h1>
            <p className="text-white/80">Real-time safety status and compliance tracking</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Live Safety Alerts */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <span>Live Safety Alerts</span>
              <Badge variant="destructive" className="ml-auto animate-pulse-alert">
                {safetyAlerts.filter(alert => alert.status === 'active').length} Active
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {safetyAlerts.map((alert) => (
                <div 
                  key={alert.id} 
                  className={`p-4 border rounded-lg ${
                    alert.status === 'active' 
                      ? 'border-destructive bg-destructive/10 animate-pulse-alert' 
                      : 'border-border bg-muted/50'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center space-x-2">
                      {alert.status === 'active' ? (
                        <XCircle className="h-4 w-4 text-destructive" />
                      ) : (
                        <CheckCircle className="h-4 w-4 text-success" />
                      )}
                      <span className="font-semibold text-sm">{alert.type}</span>
                    </div>
                    <Badge variant={getSeverityColor(alert.severity) as any}>
                      {alert.severity}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{alert.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Compliance Visualization */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-success" />
              <span>Safety Compliance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {complianceData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{item.metric}</span>
                    <span className={`text-sm font-bold ${
                      getComplianceColor(item.percentage) === 'success' ? 'text-success' :
                      getComplianceColor(item.percentage) === 'warning' ? 'text-warning' :
                      'text-destructive'
                    }`}>
                      {item.percentage}%
                    </span>
                  </div>
                  <Progress 
                    value={item.percentage} 
                    className="h-3"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Incident Log */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <span>Incident Log</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>Incident Type</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {incidentLog.map((incident) => (
                <TableRow key={incident.id}>
                  <TableCell className="font-mono text-sm">{incident.timestamp}</TableCell>
                  <TableCell>{incident.type}</TableCell>
                  <TableCell>{incident.duration}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={incident.status === 'resolved' ? 'outline' : 'destructive'}
                      className={incident.status === 'resolved' ? 'text-success border-success' : ''}
                    >
                      {incident.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default SafetyMonitor;