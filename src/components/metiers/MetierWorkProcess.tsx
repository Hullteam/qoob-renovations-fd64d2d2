
import { Clock } from "lucide-react";

interface WorkProcess {
  title: string;
  description: string;
  duration?: string;
}

interface MetierWorkProcessProps {
  workProcess: WorkProcess[];
}

const MetierWorkProcess = ({ workProcess }: MetierWorkProcessProps) => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-center text-warmBeige-800 mb-12">
          Notre méthodologie de travail
        </h2>
        
        <div className="space-y-8">
          {workProcess.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold">{index + 1}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
                {step.duration && (
                  <div className="flex items-center mt-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{step.duration}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetierWorkProcess;
