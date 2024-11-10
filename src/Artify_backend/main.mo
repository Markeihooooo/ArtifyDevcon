import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Text "mo:base/Text";
import Option "mo:base/Option";
import Iter "mo:base/Iter";
import Array "mo:base/Array";
import Error "mo:base/Error";
import Time "mo:base/Time";
import Result "mo:base/Result";

actor UserStorage {
  type User = {
    walletAddress: Text;
    principalId: Text;
    name: Text;
    createdAt: Int;
    lastLogin: Int;
  };

  private stable var stableUsers : [(Text, User)] = [];
  private var users = HashMap.HashMap<Text, User>(0, Text.equal, Text.hash);

  public type OperationResult = Result.Result<User, Text>;

  public shared(msg) func addUser(walletAddress: Text, principalId: Text, name: Text) : async OperationResult {
    try {
      let user : User = {
        walletAddress = walletAddress;
        principalId = principalId;
        name = name;
        createdAt = Time.now();
        lastLogin = Time.now();
      };
      
      users.put(principalId, user);
      #ok(user)
    } catch(err) {
      #err("Failed to add user: " # Error.message(err))
    }
  };

  public query func getUser(principalId: Text) : async OperationResult {
    switch (users.get(principalId)) {
      case (?user) { #ok(user) };
      case null { #err("User not found") };
    }
  };

  public query func getUserByWallet(walletAddress: Text) : async OperationResult {
    var foundUser : ?User = null;
    
    for (user in users.vals()) {
      if (user.walletAddress == walletAddress) {
        foundUser := ?user;
      };
    };

    switch (foundUser) {
      case (?user) { #ok(user) };
      case (null) { #err("User not found") };
    }
  };

  public shared(msg) func updateLastLogin(principalId: Text) : async OperationResult {
    switch (users.get(principalId)) {
      case (?user) {
        let updatedUser = {
          walletAddress = user.walletAddress;
          principalId = user.principalId;
          name = user.name;
          createdAt = user.createdAt;
          lastLogin = Time.now();
        };
        users.put(principalId, updatedUser);
        #ok(updatedUser)
      };
      case null { #err("User not found") };
    }
  };

  public query func getAllUsers() : async [User] {
    Iter.toArray(users.vals())
  };

  system func preupgrade() {
    stableUsers := Iter.toArray(users.entries());
  };

  system func postupgrade() {
    users := HashMap.fromIter<Text, User>(
      stableUsers.vals(),
      stableUsers.size(),
      Text.equal,
      Text.hash
    );
    stableUsers := [];
  };
}