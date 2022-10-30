import streamlit as st 

import os
import pickle

import numpy as np
attrib_info="""
#### Attribute Information : 
    - We have 23 feature in the dataset
    - 1 Target Feature 
"""


def load_model(filename):
    with open(filename,"rb") as f:
        model=pickle.load(f)
    
    return model

def run_ml_app():
    st.title("Predicting Your Risk of Diabetes ")
    
    #with 



    with st.expander("Attribute Info"):
        st.markdown(attrib_info)

    col1,col2=st.columns(2)

    with col1:
        f1=st.number_input("Feature 1")
        f3=st.number_input("Feature 3")
        f5=st.number_input("Feature 5")
        f7=st.number_input("Feature 7")
        f9=st.number_input("Feature 9")
        f11=st.number_input("Feature 11")
        f13=st.number_input("Feature 13")
        f15=st.number_input("Feature 15")
        f17=st.number_input("Feature 17")
        f19=st.number_input("Feature 19")
        f21=st.number_input("Feature 21")
        f23=st.number_input("Feature 23")


    with col2:
        f2=st.number_input("Feature 2")
        f4=st.number_input("Feature 4")
        f6=st.number_input("Feature 6")
        f8=st.number_input("Feature 8")
        f10=st.number_input("Feature 10")
        f12=st.number_input("Feature 12")
        f14=st.number_input("Feature 14")
        f16=st.number_input("Feature 16")
        f18=st.number_input("Feature 18")
        f20=st.number_input("Feature 20")
        f22=st.number_input("Feature 22")
        #f12=st.number_input("Feature 12")
        pass
    
    with st.expander("Your Selected Options are "):
        results={
            "feature 1": f1,"feature 2": f2,
            "feature 3": f3,"feature 4": f4,
            "feature 5": f5,"feature 6": f6,
            "feature 7": f7,"feature 8": f8,
            "feature 9": f9,"feature 10": f10,
            "feature 11": f11,"feature 12": f12,
            "feature 13": f13,"feature 14": f14,
            "feature 15": f15,"feature 16": f16,
            "feature 17": f17,"feature 18": f18,
            "feature 19": f19,"feature 20": f20,
            "feature 21": f21,"feature 22": f22,
            "feature 23": f23,
            }
        st.write(results)

        encoded_result=[]
        for i in results.values():
            if type(i)==float:
                encoded_result.append(i)
            
            

        
    #st.write(np.array(encoded_result).reshape(1,-1))
    with st.expander("Predicting your Risk of Parkinson's"):
        model=load_model("./RandomForest/fold_1.pkl")
        rf_scaler=load_model("./RandomForest/scaler_1.pkl")
        single_samlpe=np.array(encoded_result).reshape(1,-1)
        #st.write()
        #st.write(rf_scaler.transform(single_samlpe))

        prediction=model.predict(single_samlpe)
        pred_prob=model.predict_proba(single_samlpe)
        #st.write(prediction)
        #st.write(pred_prob)

        if prediction==1:
            st.warning(f"High Risk of Parkinson's 💀")
            predict_probability_score={"Negative Risk":pred_prob[0][0]*100,
            "Postive Risk":pred_prob[0][1]*100}
            st.write(predict_probability_score)
        else:
            st.success(f"You are Healthy 💘")
            predict_probability_score={"Negative Risk":pred_prob[0][0]*100,
            "Postive Risk":pred_prob[0][1]*100}
            st.write(predict_probability_score)