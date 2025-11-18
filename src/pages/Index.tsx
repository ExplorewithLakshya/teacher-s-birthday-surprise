import { Card } from "@/components/ui/card";
import { Confetti } from "@/components/Confetti";
import heroImage from "@/assets/teacher-celebration.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Confetti />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="Celebration" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8 animate-float">
            <span className="text-6xl md:text-8xl">🎉</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-celebration-gold via-celebration-coral to-accent bg-clip-text text-transparent">
            Happy Birthday!
          </h1>
          
          <p className="text-2xl md:text-3xl mb-4 text-foreground font-medium">
            Dear Teacher
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Today we celebrate not just your birthday, but the incredible impact you've made on our lives through your dedication, wisdom, and kindness.
          </p>
        </div>
      </section>

      {/* Appreciation Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Why You're Amazing
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-[var(--shadow-celebration)] transition-all duration-300 bg-card border-border">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Knowledge Sharer</h3>
              <p className="text-muted-foreground">
                You've opened our minds to new worlds of knowledge and inspired us to keep learning every day.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-[var(--shadow-celebration)] transition-all duration-300 bg-card border-border">
              <div className="text-5xl mb-4">💝</div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Caring Mentor</h3>
              <p className="text-muted-foreground">
                Your patience and understanding have made learning a joy, not a burden.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-[var(--shadow-celebration)] transition-all duration-300 bg-card border-border">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Role Model</h3>
              <p className="text-muted-foreground">
                You inspire us not just with what you teach, but with who you are as a person.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-celebration-gold/10 via-celebration-coral/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-8 animate-float">🎂</div>
          
          <Card className="p-12 bg-card/80 backdrop-blur border-border shadow-[var(--shadow-soft)]">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-card-foreground">
              A Special Message
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              On this special day, we want you to know how grateful we are for everything you do. 
              Your lessons extend far beyond the classroom - you've taught us about perseverance, 
              kindness, and the joy of discovery.
            </p>
            <p className="text-xl font-semibold text-primary">
              May your birthday be filled with as much joy as you bring to our lives every day! 🎈
            </p>
          </Card>
        </div>
      </section>

      {/* Wishes Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
            Our Birthday Wishes
          </h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-all duration-300">
              <p className="text-lg text-card-foreground">
                🎁 May this year bring you endless happiness and success
              </p>
            </div>
            
            <div className="p-6 bg-card rounded-lg border border-border hover:border-secondary transition-all duration-300">
              <p className="text-lg text-card-foreground">
                🌟 May you continue to inspire and touch the hearts of many more students
              </p>
            </div>
            
            <div className="p-6 bg-card rounded-lg border border-border hover:border-accent transition-all duration-300">
              <p className="text-lg text-card-foreground">
                💖 May you always find joy in the difference you make in our lives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center px-4">
        <p className="text-2xl font-semibold mb-2 text-primary">
          With Love and Gratitude
        </p>
        <p className="text-muted-foreground">
          From Your Students 💝
        </p>
      </footer>
    </div>
  );
};

export default Index;
