import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Search, Filter, BookOpen, Calculator, Cpu, Beaker, Globe, Users2 } from "lucide-react";
import { useState } from "react";

const ResourcesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const subjects = [
    { id: "cse", name: "Computer Science & Engineering", icon: Cpu, color: "bg-blue-100 text-blue-800" },
    { id: "math", name: "Mathematics", icon: Calculator, color: "bg-green-100 text-green-800" },
    { id: "physics", name: "Physics", icon: Beaker, color: "bg-purple-100 text-purple-800" },
    { id: "english", name: "English", icon: Globe, color: "bg-orange-100 text-orange-800" },
    { id: "management", name: "Management", icon: Users2, color: "bg-red-100 text-red-800" },
  ];

  const resources = [
    {
      id: 1,
      title: "Data Structures and Algorithms - Mid Semester Exam",
      subject: "Computer Science & Engineering",
      subjectId: "cse",
      year: "2023",
      semester: "Fall",
      type: "Question Paper",
      downloads: 234,
      uploadDate: "2024-01-15",
      size: "2.1 MB"
    },
    {
      id: 2,
      title: "Object Oriented Programming - Final Exam",
      subject: "Computer Science & Engineering", 
      subjectId: "cse",
      year: "2023",
      semester: "Spring",
      type: "Question Paper",
      downloads: 189,
      uploadDate: "2024-01-10",
      size: "1.8 MB"
    },
    {
      id: 3,
      title: "Calculus I - Previous Year Papers Collection",
      subject: "Mathematics",
      subjectId: "math",
      year: "2022",
      semester: "Fall",
      type: "Question Paper",
      downloads: 167,
      uploadDate: "2024-01-08",
      size: "5.2 MB"
    },
    {
      id: 4,
      title: "Database Management Systems - Lab Manual",
      subject: "Computer Science & Engineering",
      subjectId: "cse", 
      year: "2023",
      semester: "Fall",
      type: "Study Material",
      downloads: 298,
      uploadDate: "2024-01-12",
      size: "3.4 MB"
    },
    {
      id: 5,
      title: "Engineering Physics - Comprehensive Notes",
      subject: "Physics",
      subjectId: "physics",
      year: "2023",
      semester: "Spring",
      type: "Study Material",
      downloads: 145,
      uploadDate: "2024-01-05",
      size: "7.8 MB"
    },
    {
      id: 6,
      title: "Business Communication - Assignment Questions",
      subject: "English",
      subjectId: "english",
      year: "2023",
      semester: "Fall",
      type: "Assignment",
      downloads: 87,
      uploadDate: "2024-01-03",
      size: "1.2 MB"
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = !selectedSubject || resource.subjectId === selectedSubject;
    const matchesYear = !selectedYear || resource.year === selectedYear;
    
    return matchesSearch && matchesSubject && matchesYear;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Question Paper": return "bg-blue-100 text-blue-800";
      case "Study Material": return "bg-green-100 text-green-800";
      case "Assignment": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="bg-gradient-card rounded-lg p-6 border">
        <h1 className="text-3xl font-bold mb-2 text-gradient flex items-center gap-2">
          <FileText className="h-8 w-8 text-primary" />
          Academic Resources
        </h1>
        <p className="text-muted-foreground">
          Access previous year papers, study materials, and academic resources to enhance your learning experience.
        </p>
      </div>

      {/* Resource Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-soft border-0 bg-gradient-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">567</p>
                <p className="text-sm text-muted-foreground">Total Papers</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-soft border-0 bg-gradient-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">234</p>
                <p className="text-sm text-muted-foreground">Study Materials</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-soft border-0 bg-gradient-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Download className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">12.5K</p>
                <p className="text-sm text-muted-foreground">Downloads</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-soft border-0 bg-gradient-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users2 className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">45</p>
                <p className="text-sm text-muted-foreground">Contributors</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="shadow-soft border-0 bg-gradient-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-primary" />
            Find Resources
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search papers, subjects, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger>
                <SelectValue placeholder="Select Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Subjects</SelectItem>
                {subjects.map((subject) => (
                  <SelectItem key={subject.id} value={subject.id}>
                    {subject.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger>
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Years</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Subject Categories */}
      <Card className="shadow-soft border-0 bg-gradient-card">
        <CardHeader>
          <CardTitle>Browse by Subject</CardTitle>
          <CardDescription>Quick access to resources by subject area</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {subjects.map((subject) => {
              const IconComponent = subject.icon;
              return (
                <Button
                  key={subject.id}
                  variant="outline"
                  className="h-auto p-4 flex-col gap-2"
                  onClick={() => setSelectedSubject(subject.id)}
                >
                  <IconComponent className="h-6 w-6 text-primary" />
                  <span className="text-xs text-center leading-tight">{subject.name}</span>
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Resources List */}
      <Card className="shadow-soft border-0 bg-gradient-card">
        <CardHeader>
          <CardTitle>Available Resources</CardTitle>
          <CardDescription>
            {filteredResources.length} resources found
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="p-4 bg-background rounded-lg border space-y-3">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h4 className="font-bold text-lg">{resource.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{resource.subject}</Badge>
                    <Badge className={getTypeColor(resource.type)}>
                      {resource.type}
                    </Badge>
                    <Badge variant="outline">{resource.year} - {resource.semester}</Badge>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span>Size: {resource.size}</span>
                  <span>Downloads: {resource.downloads}</span>
                  <span>Uploaded: {new Date(resource.uploadDate).toLocaleDateString()}</span>
                </div>
                <Button size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          ))}
          
          {filteredResources.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No resources found matching your criteria.</p>
              <p className="text-sm">Try adjusting your search or filters.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Upload Resources */}
      <Card className="shadow-soft border-0 bg-gradient-card">
        <CardHeader>
          <CardTitle>Contribute Resources</CardTitle>
          <CardDescription>
            Help your fellow students by sharing your study materials and previous papers.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full">
            <FileText className="h-4 w-4 mr-2" />
            Upload New Resource
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResourcesPage;