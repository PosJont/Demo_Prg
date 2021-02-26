#BMI progamming

Height = int(input("Height >>"))
Width = int (input("Width >>"))

#公式 : 
#BMI = Width / (Height/100)**
# 體重過輕 BMI<18.5	 
# 健康體位 18.5<=BMI<24
# 體位異常 過重：24<=BMI<27
# 輕度肥胖：27 <= BMI < 30
# 中度肥胖：30 <= BMI < 35
# 重度肥胖：BMI >= 35

Height /=100 # 高度 換算 公尺
Height*=Height
BMI = Width/Height

print("%-5.2f" % BMI)
if(BMI < 18.5):
  print("體重過輕")
elif(BMI <24):
  print("健康體位")
elif(BMI <27):
  print("體位異常")
elif(BMI <30):
  print("輕度肥胖")
elif(BMI <35):
  print("中度肥胖")
else:
  print("重度肥胖")

