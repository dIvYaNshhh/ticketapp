import AppGradient from "@/components/AppGradient";
import Container from "@/components/Container";
import QuestionOne from "./question_one";
import QuestionTwo from "./question_two";
import QuestionThree from "./question_three";
import QuestionFour from "./question_four";
import { useState } from "react";
import { useRouter } from "expo-router";

export interface QuestionProps {
  onPress: () => void;
}
export default function QuestionaireScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const router = useRouter();
  return (
    <Container style="flex-1">
      <AppGradient colors={["#e5ddff", "#eee9ff", "#efeaff"]}>
        {currentQuestion === 1 && (
          <QuestionOne onPress={() => setCurrentQuestion(2)} />
        )}
        {currentQuestion === 2 && (
          <QuestionTwo onPress={() => setCurrentQuestion(3)} />
        )}
        {currentQuestion === 3 && (
          <QuestionThree onPress={() => setCurrentQuestion(4)} />
        )}
        {currentQuestion === 4 && (
          <QuestionFour onPress={() => router.push("/guest")} />
        )}
      </AppGradient>
    </Container>
  );
}
