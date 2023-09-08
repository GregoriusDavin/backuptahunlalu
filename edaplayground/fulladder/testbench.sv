module testbench;

reg A, B, Cin;
wire Sum, Cout;

  FullAdder dut ( //insialisasi modul FullAdder
  .A(A),
  .B(B),
  .Cin(Cin),
  .Sum(Sum),
  .Cout(Cout)
);

initial begin  //output
  $display("A B Cin | Sum Cout");
  $monitor("%b %b  %b  |  %b   %b", A, B, Cin, Sum, Cout);
  
  A = 0; B = 0; Cin = 0; #10;
  A = 0; B = 0; Cin = 1; #10;
  A = 0; B = 1; Cin = 0; #10;
  A = 0; B = 1; Cin = 1; #10;
  A = 1; B = 0; Cin = 0; #10;
  A = 1; B = 0; Cin = 1; #10;
  A = 1; B = 1; Cin = 0; #10;
  A = 1; B = 1; Cin = 1; #10;
  
  $finish;
end

initial
    begin
      //dump vars
      $display("\n -----------------DUMP--------------------------------------\mn");
      $dumpfile("dump.vcd");
      $dumpvars(1);
    end
 
endmodule