package Java_Assignments.java_01_first_java.java_03_simple_interest;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.print("Enter Principle, Rate & Time(in years) for calculating your Simple Interest (S.I): ");
        Scanner sc=new Scanner(System.in);
        float principle=sc.nextFloat();
        float rate=sc.nextFloat();
        float time=sc.nextFloat();
        float simple_interest=simple_interest(principle,rate,time);
        System.out.println("Your principle Amount is: "+principle);
        System.out.println("Your Simple Interest (S.I) is: "+simple_interest);
        System.out.println("Your Total Amount is: "+(principle+simple_interest));
    }

    public static float simple_interest(float p, float r, float t){
        return (p*r*t)/100;
    }
}
