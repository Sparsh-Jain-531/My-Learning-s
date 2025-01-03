package Java_Assignments.java_01_first_java.java_04_calculate_answer;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter first number: ");
        float num1= sc.nextFloat();
        System.out.print("Enter Second number: ");
        float num2= sc.nextFloat();
        System.out.print("Enter operator for operation (+,-,*,/): ");
        char operator= sc.next().trim().charAt(0);
        System.out.println("The Answer is: "+calculate(num1,num2,operator));
    }

    public static float calculate(float num1, float num2, char operator){
        if (operator=='+') return num1+num2;
        else if (operator=='-') return num1-num2;
        else if (operator=='*') return num1*num2;
        else if (operator=='/') {
            if (num2==0){
                return 0;
            }
            else return num1/num2;
        }
        else return 0;
    }
}
