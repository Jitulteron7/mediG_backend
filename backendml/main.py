from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello bros'


@app.route('/post', methods=["POST"])
def testpost():
     input_json = request.get_json(force=True) 
     dictToReturn = {'text':input_json['text']}
     return jsonify(dictToReturn)

@app.route("/nodecall",methods=["GET"])
def testnodecall():
    dictData = {'message':"working",'status':200}
    return jsonify(dictData)

@app.route("/nodepost",methods=["POST"])
def testnodepost():
    node_post = request.get_json(force=True) 
    print(node_post)
    dictData = {'message':"working",'status':200,'recieved':node_post}
    return jsonify(dictData)
     


if __name__ == '__main__':
   app.run(debug = True)