package Java_Assignments.java_02_conditionals_loops.java_01_Areas.Circles;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter Radius of Circle: ");
        float radius=sc.nextFloat();
        System.out.println("The Area of Circle is: "+Area(radius));
        System.out.println("The Perimeter of Circle is: "+Perimeter(radius));
    }

    public static double Area(double radius){
        return Math.PI*radius*radius;
    }

    public static double Perimeter(double radius){
        return Math.PI*2*radius;
    }
}
